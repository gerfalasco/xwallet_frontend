import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IAccount } from '@cb/core/interfaces/account.interface';
import { ITransaccion } from '@cb/core/interfaces/transaccion.interface';
import { ITransactionType } from '@cb/core/interfaces/transaction-type.interface';
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
  grupoTransaccion: FormGroup;
  transactionTypes: ITransactionType[] = [];
  titulo: string = 'Transacción';
  transaccion: ITransaccion | null = null;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private modalActivoRef: ModalActivoRef,
    private transactionTypeService: TransactionTypeService,
    private movementsService: MovementService,
    private dialogService: DialogService
  ) {
    this.grupoTransaccion = this.fb.group({
      accountDescription: [],
      accountId: [],
      customerName: [],
      customerId: [],
      transactionType: [],
      amount: [0]
    });

    this.grupoTransaccion.controls['accountDescription'].disable();
    this.grupoTransaccion.controls['customerName'].disable();
    this.grupoTransaccion.valueChanges.subscribe((value) => { });
  }

  ngOnInit(): void {
    this.grupoTransaccion.controls['customerName'].setValue(this.dataService.currentCustomer?.customerName);
    this.grupoTransaccion.controls['customerId'].setValue(this.dataService.currentCustomer?.customerId);
    this.grupoTransaccion.controls['accountId'].setValue(this.account?.accountId);
    const originAccountDescription = this.account?.accountType + '(' + this.account?.accountCurrency + ')';
    this.grupoTransaccion.controls['accountDescription'].setValue(originAccountDescription);

    this.transactionTypeService.getTransactionTypes().subscribe((transactionTypes: ITransactionType[]) => {
      this.transactionTypes = transactionTypes;
    });
  }


  clear($event: MouseEvent): void {
    $event.stopPropagation();
    this.grupoTransaccion.controls['transactionType'].setValue(null);
  }

  //Cierro el modal
  closeForm(): void {
    this.account = null;
    this.modalActivoRef.cerrar();
  }

  onSubmit(): void {
    this.transaccion = this.grupoTransaccion.value;
    const transactionType = this.transactionTypes.find(transactionType => transactionType.Id === this.transaccion?.transactionType);
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
        this.movementsService.transaction({ transaccion: this.transaccion! }).subscribe({
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
