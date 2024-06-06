import { Component, OnInit } from '@angular/core';
import { IngresoModificacionComponent } from '@cb/account/views/ingreso-modificacion/ingreso-modificacion.component';
import { IAccount } from '@cb/core/interfaces/account.interface';
import { AccountService } from '@cb/core/services/accounts.service';
import { DataService } from '@cb/core/services/data.service';
import { ModalService } from 'src/app/shared/components/modal';
import { IDialogConfig } from 'src/app/shared/dialogo/interfaces/dialog-config';
import { DialogService } from 'src/app/shared/dialogo/services/dialog-service.service';

@Component({
  selector: 'cb-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']

})
export class ConsultaComponent implements OnInit {
  accounts: IAccount[] = [];

  constructor(
    private accountService: AccountService,
    private modalService: ModalService,
    private dialogService: DialogService,
    private dataService: DataService,
  ) {}

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(): void {
    this.accountService.getAccounts().subscribe((accounts: IAccount[]) => {
      this.accounts = accounts;
      this.dataService.customerSource$.subscribe(customer => {
        console.log(this.dataService.currentCustomer);
      
      });
    });
  }

  verAccount(account: IAccount): void {
    const ref = this.modalService.abrir(IngresoModificacionComponent, {
      cerrarConClickFueraDelModal: false,
    });

    ref.instancia.account = account;
    ref.instancia.titulo = 'Detalle: ' + account.accountType;
  }

  editarAccount(account: IAccount): void {
    const ref = this.modalService.abrir(IngresoModificacionComponent, {
      cerrarConClickFueraDelModal: false,
    });

    ref.instancia.account = account;
    ref.instancia.estado = 1;
    ref.instancia.titulo = 'Modificación: ' + account.accountType;

    ref.respuesta$.subscribe({
      next: () => { },
      error: () => { this.getAccounts(); },
    });
  }

  altaAccount(): void {
    const ref = this.modalService.abrir(IngresoModificacionComponent, {
      cerrarConClickFueraDelModal: false,
    });

    ref.instancia.estado = 0;
    ref.instancia.titulo = 'Alta';

    ref.respuesta$.subscribe({
      next: () => { },
      error: () => { this.getAccounts(); },
    });
  }

  eliminarAccount(account: IAccount): void {
   let dialogConfig = {
      title: 'Eliminar cuenta',
      message: '¿Está seguro que desea eliminar la cuenta seleccionada?',
      tipo: 'advertencia',
      confirmText: 'Aceptar',
      cancelText: 'Cancelar',
    } as IDialogConfig;

    this.dialogService.open(dialogConfig).then((aceptar: boolean) => {
      if (aceptar) {
          this.accountService.deleteAccount({ accountId: account.accountId }).subscribe({
            next: () => {
              this.getAccounts();

              dialogConfig = {
                title: 'Cuenta eliminada',
                message: 'La cuenta seleccionada ha sido eliminada correctamente.',
                tipo: 'exito',
                confirmText: 'Aceptar',
                cancelText: undefined,
              } as IDialogConfig;

              this.dialogService.open(dialogConfig);
            },
            error: () => { },
          });
      }
    });
  }

}
