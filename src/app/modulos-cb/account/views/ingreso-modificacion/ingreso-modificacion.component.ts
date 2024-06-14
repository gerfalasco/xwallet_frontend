import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAccountType } from '@cb/core/interfaces/account-type.interface';
import { IAccount } from '@cb/core/interfaces/account.interface';
import { ICurrency } from '@cb/core/interfaces/currency.interface';
import { AccountTypeService } from '@cb/core/services/account-type.service';
import { AccountService } from '@cb/core/services/accounts.service';
import { CurrencyService } from '@cb/core/services/currency.service';
import { DataService } from '@cb/core/services/data.service';
import { ModalActivoRef } from 'src/app/shared/components/modal';
import { IDialogConfig } from 'src/app/shared/dialogo/interfaces/dialog-config';
import { DialogService } from 'src/app/shared/dialogo/services/dialog-service.service';

/**
 * Estados posibles de la pantalla:
 * 0 -> Alta,
 * 1 -> Modificacion,
 * 2 -> Detalle
 **/
export enum Estado {
  Alta,
  Modificacion,
  Detalle,
}
@Component({
  selector: 'cb-ingreso-modificacion',
  templateUrl: './ingreso-modificacion.component.html',
  styleUrls: ['./ingreso-modificacion.component.scss']
})
export class IngresoModificacionComponent implements OnInit {
  account!: IAccount | null;
  grupoAccount: FormGroup;
  estado: Estado = Estado.Detalle;
  titulo: string = '';
  currencies: ICurrency[] = [];
  accountsType: IAccountType[] = [];

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private modalActivoRef: ModalActivoRef,
    private dialogService: DialogService,
    private dataService: DataService,
    private currencyService: CurrencyService,
    private accountTypeService: AccountTypeService
  ) {
    this.grupoAccount = this.fb.group({
      accountId: [0],
      accountBalance: [0],
      accountType: [],
      accountCurrency: []
    });
  }

  ngOnInit(): void {
    this.getCurrencies();
    this.getAccountsType();

    if (this.estado !== Estado.Alta) {
      this.cargarPantalla();

      if (this.estado === Estado.Detalle) {
        this.grupoAccount.disable();
      }
    }
  }

  getCurrencies() {
    this.currencyService.getCurrencies().subscribe((currency: ICurrency[]) => {
      this.currencies = currency;
    });
  }

  getAccountsType() {
    this.accountTypeService.getAccountsType().subscribe((accountType: IAccountType[]) => {
      this.accountsType = accountType;
    });
  }

  onSubmit(): void {
    if (this.grupoAccount.valid) {
      this.account = this.grupoAccount.value;

      if (this.estado === Estado.Alta) {
        this.accountService.setAccount({ account: this.account!, customerId: this.dataService.currentCustomer!.customerId }).subscribe({
          next: (account: IAccount) => {
            console.log(account);
            this.closeForm();

            const dialogConfig = {
              title: 'Cuenta creada',
              message: 'La cuenta se ha creado correctamente',
              tipo: 'exito',
              confirmText: 'Aceptar',
              cancelText: undefined,
            } as IDialogConfig;

            this.dialogService.open(dialogConfig);


          },
          error: (error: any) => {
            console.log(error);
          }
        });
      }

      else {
        let dialogConfig = {
          title: 'Modificar cuenta',
          message: '¿Está seguro que desea modificar la cuenta seleccionada?',
          tipo: 'advertencia',
          confirmText: 'Aceptar',
          cancelText: 'Cancelar',
        } as IDialogConfig;

        this.dialogService.open(dialogConfig).then((aceptar: boolean) => {
          this.accountService.updateAccount({ account: this.account!, customerId: this.dataService.currentCustomer!.customerId }).subscribe({
            next: (account: IAccount) => {
              console.log(account);
              this.closeForm();

              dialogConfig = {
                title: 'Cuenta modificada',
                message: 'La cuenta se ha modificado correctamente',
                tipo: 'exito',
                confirmText: 'Aceptar',
                cancelText: undefined,
              } as IDialogConfig;

              this.dialogService.open(dialogConfig);
            },
            error: (error: any) => {
              console.log(error);
            }
          });
        });
      }
    }

  }

  cargarPantalla() {
    if (this.account) {
      this.grupoAccount.patchValue(this.account);
    }
  }

  clear($event: MouseEvent): void {
    $event.stopPropagation();
    this.grupoAccount.controls['accountCurrency'].setValue(null);
  }

  clearAccountType($event: MouseEvent): void {
    $event.stopPropagation();
    this.grupoAccount.controls['accountType'].setValue(null);
  }

  //Cierro el modal
  closeForm(): void {
    this.account = null;
    this.modalActivoRef.cerrar();
  }
}
