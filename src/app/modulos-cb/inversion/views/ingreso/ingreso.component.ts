import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IAccount } from '@cb/core/interfaces/account.interface';
import { IInversion } from '@cb/core/interfaces/inversion.interface';
import { DataService } from '@cb/core/services/data.service';
import { MovementService } from '@cb/core/services/movement.service';
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
  grupoInversion: FormGroup;
  inversion: IInversion | null = null;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private modalActivoRef: ModalActivoRef,
    private movementsService: MovementService,
    private dialogService: DialogService
  ) {
    this.grupoInversion = this.fb.group({
      accountDescription: [],
      accountId: [''],
      customerId: [''],
      customerName: [],
      investmentDays: [''],
      investmentAmount: ['']
    });

  }

  ngOnInit(): void {
    this.grupoInversion.controls['customerName'].setValue(this.dataService.currentCustomer?.customerName);
    this.grupoInversion.controls['customerId'].setValue(this.dataService.currentCustomer?.customerId);
    this.grupoInversion.controls['accountId'].setValue(this.account?.accountId);
    const originAccountDescription = this.account?.accountType + '(' + this.account?.accountCurrency + ')';
    this.grupoInversion.controls['accountDescription'].setValue(originAccountDescription);
  }

  //Cierro el modal
  closeForm(): void {
    this.account = null;
    this.modalActivoRef.cerrar();
  }

  onSubmit(): void {
    this.inversion = this.grupoInversion.value;
    const mensaje = '¿Está seguro que desea realizar la operación a la cuenta seleccionada?';

    let dialogConfig = {
      title: "Operación de inversión",
      message: mensaje,
      tipo: 'advertencia',
      confirmText: 'Aceptar',
      cancelText: 'Cancelar',
    } as IDialogConfig;

    this.dialogService.open(dialogConfig).then((aceptar: boolean) => {
      if (aceptar) {
        this.movementsService.investment({ inversion: this.inversion! }).subscribe({
          next: (account: IAccount) => {
            console.log(account);
            this.closeForm();

            dialogConfig = {
              title: 'Operación realizada',
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
