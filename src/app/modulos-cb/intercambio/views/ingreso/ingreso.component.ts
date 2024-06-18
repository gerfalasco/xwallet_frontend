import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAccount } from '@cb/core/interfaces/account.interface';
import { ICustomer } from '@cb/core/interfaces/customer.interface';
import { IIntercambio } from '@cb/core/interfaces/intercambio.interface';
import { ITransactionType } from '@cb/core/interfaces/transaction-type.interface';
import { CustomerService } from '@cb/core/services/customer.service';
import { DataService } from '@cb/core/services/data.service';
import { MovementService } from '@cb/core/services/movement.service';
import { TransactionTypeService } from '@cb/core/services/transaction-type.service';
import { ModalActivoRef } from 'src/app/shared/components/modal';
import { IDialogConfig } from 'src/app/shared/dialogo/interfaces/dialog-config';
import { DialogService } from 'src/app/shared/dialogo/services/dialog-service.service';

@Component({
  selector: 'cb-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.scss']
})
export class IngresoComponent implements OnInit {
  account: IAccount | null = null;
  accounts: IAccount[] = [];
  grupoIntercambio: FormGroup;
  titulo: string = "Exchange";
  transactionTypes: ITransactionType[] = [];
  intercambio: IIntercambio | null = null;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private modalActivoRef: ModalActivoRef,
    private transactionTypeService: TransactionTypeService,
    private movementsService: MovementService,
    private dialogService: DialogService
  ) {
    this.grupoIntercambio = this.fb.group({
      originAccountDescription: [],
      originAccountId: [],
      destinationAccountId: [],
      originCustomerName: [],
      originCustomerId: [],
      transactionType: [],
      amount: []
    });

    this.grupoIntercambio.controls['originAccountDescription'].disable();
    this.grupoIntercambio.controls['originCustomerName'].disable();

    this.grupoIntercambio.valueChanges.subscribe((value) => {
      console.log(value);
    });
  }

  ngOnInit(): void {
    this.grupoIntercambio.controls['originCustomerName'].setValue(this.dataService.currentCustomer?.customerName);
    this.grupoIntercambio.controls['originCustomerId'].setValue(this.dataService.currentCustomer?.customerId);
    this.grupoIntercambio.controls['originAccountId'].setValue(this.account?.accountId);
    const originAccountDescription = this.account?.accountType + '(' + this.account?.accountCurrency + ')';
    this.grupoIntercambio.controls['originAccountDescription'].setValue(originAccountDescription);
    this.accounts = this.accounts.filter(account => account.accountId !== this.account?.accountId);

    this.transactionTypeService.getTransactionTypes().subscribe((transactionTypes: ITransactionType[]) => {
      this.transactionTypes = transactionTypes;
    });

  }

  clear($event: MouseEvent): void {
    $event.stopPropagation();
    this.grupoIntercambio.controls['originAccountId'].setValue(null);
  }

  clearTransaction($event: MouseEvent): void {
    $event.stopPropagation();
    this.grupoIntercambio.controls['transactionType'].setValue(null);
  }

  //Cierro el modal
  closeForm(): void {
    this.account = null;
    this.modalActivoRef.cerrar();
  }

  onSubmit(): void {
    this.intercambio = this.grupoIntercambio.value;
    const transactionType = this.transactionTypes.find(transactionType => transactionType.Id === this.intercambio?.transactionType);
    const mensaje = '¿Está seguro que desea realizar la operación a la cuenta seleccionada?';

    let dialogConfig = {
      title: transactionType?.Descripcion,
      message: mensaje,
      tipo: 'advertencia',
      confirmText: 'Aceptar',
      cancelText: 'Cancelar',
    } as IDialogConfig;

    this.dialogService.open(dialogConfig).then((aceptar: boolean) => {
      if (aceptar) {
        this.movementsService.exchange({ intercambio: this.intercambio! }).subscribe({
          next: (account: IAccount) => {
            console.log(account);
            this.closeForm();

            dialogConfig = {
              title: transactionType?.Descripcion + ' realizada',
              message: 'La operación ha sido realizada correctamente',
              tipo: 'exito',
              confirmText: 'Aceptar',
            } as IDialogConfig;

            this.dialogService.open(dialogConfig);
          },
          error: (error: any) => {
            console.log(error);
          }
        });
      }
    });
  }
}
