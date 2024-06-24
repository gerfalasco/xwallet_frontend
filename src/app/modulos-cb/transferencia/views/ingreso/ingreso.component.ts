import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { IAccount } from '@cb/core/interfaces/account.interface';
import { ITransactionType } from '@cb/core/interfaces/transaction-type.interface';
import { ITransferencia } from '@cb/core/interfaces/transferencia.interface';
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
  grupoTransferencia: FormGroup;
  transactionTypes: ITransactionType[] = [];
  titulo: string = 'Transferencia';
  transferencia: ITransferencia | null = null;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private modalActivoRef: ModalActivoRef,
    private transactionTypeService: TransactionTypeService,
    private movementsService: MovementService,
    private dialogService: DialogService
  ) {
    this.grupoTransferencia = this.fb.group({
      originAccountDescription: [],
      originAccountId: [],
      destinationAccountId: [],
      originCustomerName: [],
      originCustomerId: [],
      transactionType: [],
      amount: []
    });

    this.grupoTransferencia.controls['originAccountDescription'].disable();
    this.grupoTransferencia.controls['originCustomerName'].disable();
    this.grupoTransferencia.valueChanges.subscribe((value) => {});
  }

  ngOnInit(): void {
    this.grupoTransferencia.controls['originCustomerName'].setValue(this.dataService.currentCustomer?.customerName);
    this.grupoTransferencia.controls['originCustomerId'].setValue(this.dataService.currentCustomer?.customerId);
    this.grupoTransferencia.controls['originAccountId'].setValue(this.account?.accountId);
    const originAccountDescription = this.account?.accountType + '(' + this.account?.accountCurrency + ')';
    this.grupoTransferencia.controls['originAccountDescription'].setValue(originAccountDescription);
    this.accounts = this.accounts.filter(account => account.accountId !== this.account?.accountId);

    this.transactionTypeService.getTransactionTypes().subscribe((transactionTypes: ITransactionType[]) => {
      this.transactionTypes = transactionTypes;
    });
  }


  clear($event: MouseEvent): void {
    $event.stopPropagation();
    this.grupoTransferencia.controls['originAccountId'].setValue(null);
  }

  clearTransaction($event: MouseEvent): void {
    $event.stopPropagation();
    this.grupoTransferencia.controls['transactionType'].setValue(null);
  }

  //Cierro el modal
  closeForm(): void {
    this.account = null;
    this.modalActivoRef.cerrar();
  }

  onSubmit(): void {
    this.transferencia = this.grupoTransferencia.value;
    const transactionType = this.transactionTypes.find(transactionType => transactionType.Id === this.transferencia?.transactionType);
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
        this.movementsService.transfer({ transferencia: this.transferencia! }).subscribe({
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
