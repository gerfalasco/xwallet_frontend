import { Component, OnInit } from '@angular/core';
import { IngresoModificacionComponent } from '@cb/account/views/ingreso-modificacion/ingreso-modificacion.component';
import { IAccount } from '@cb/core/interfaces/account.interface';
import { IMovement } from '@cb/core/interfaces/movement';
import { AccountService } from '@cb/core/services/accounts.service';
import { CustomerService } from '@cb/core/services/customer.service';
import { DataService } from '@cb/core/services/data.service';
import { ModalService } from 'src/app/shared/components/modal';
import { IDialogConfig } from 'src/app/shared/dialogo/interfaces/dialog-config';
import { DialogService } from 'src/app/shared/dialogo/services/dialog-service.service';
import { ConsultaComponent as ConsultaMovementComponent } from '../../../movements/components/consulta/consulta.component';
import { IngresoComponent } from '@cb/intercambio/views/ingreso/ingreso.component';
import { IngresoComponent as IngresoInversionComponent} from '@cb/inversion/views/ingreso/ingreso.component';
import { IngresoComponent as IngresoTransaccionComponent} from '@cb/transaccion/views/ingreso/ingreso.component';
import { IngresoComponent as IngresoTransferenciaComponent} from '@cb/transferencia/views/ingreso/ingreso.component';

@Component({
  selector: 'cb-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']

})
export class ConsultaComponent implements OnInit {
  accounts: IAccount[] = [];

  constructor(
    private accountService: AccountService,
    private customerService: CustomerService,
    private modalService: ModalService,
    private dialogService: DialogService,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getAccounts();
  }

  getAccounts(): void {
    this.accountService.getAccounts().subscribe((accounts: IAccount[]) => {
      this.accounts = accounts.filter(account =>
        this.dataService.currentCustomer?.accountList.some(accountCustomer => {
          return accountCustomer.accountId === account.accountId;
        })
      );

      this.accounts = [...this.accounts].sort((a, b) => a.accountId - b.accountId);
    });
  }

  getCustomer() {
    this.customerService.getCustomer({ customerId: this.dataService.currentCustomer!.customerId }).subscribe((customer) => {
      this.dataService.changeData(customer);
      this.getAccounts();
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
      error: () => {
        this.getCustomer();
      },
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
      error: () => {
        this.getCustomer();
      },
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
            dialogConfig = {
              title: 'Cuenta eliminada',
              message: 'La cuenta seleccionada ha sido eliminada correctamente.',
              tipo: 'exito',
              confirmText: 'Aceptar',
              cancelText: undefined,
            } as IDialogConfig;

            this.dialogService.open(dialogConfig);

            this.getCustomer();
          },
          error: () => { },
        });
      }
    });
  }

  activeSubmenuIndex: number | null = null;

  toggleSubmenu(index: number): void {
    if (this.activeSubmenuIndex === index) {
      this.activeSubmenuIndex = null;
    } else {
      this.activeSubmenuIndex = index;
    }
  }

  verMovimiento(movimientos: IMovement[]) {
    const ref = this.modalService.abrir(ConsultaMovementComponent, {
      cerrarConClickFueraDelModal: false,
    });

    ref.instancia.movements = movimientos;
  }

  intercammbio(account: IAccount) {
    const ref = this.modalService.abrir(IngresoComponent, {
      cerrarConClickFueraDelModal: false,
    });

    ref.instancia.account = account;
    ref.instancia.accounts = this.accounts;

    ref.respuesta$.subscribe({
      next: () => { },
      error: () => {
        this.getCustomer();
      },
    });
  }

  inversion(account: IAccount) {
    const ref = this.modalService.abrir(IngresoInversionComponent, {
      cerrarConClickFueraDelModal: false,
    });

    ref.instancia.account = account;

    ref.respuesta$.subscribe({
      next: () => { },
      error: () => {
        this.getCustomer();
      },
    });
  }

  transaccion(account: IAccount) {
    const ref = this.modalService.abrir(IngresoTransaccionComponent, {
      cerrarConClickFueraDelModal: false,
    });

    ref.instancia.account = account;

    ref.respuesta$.subscribe({
      next: () => { },
      error: () => {
        this.getCustomer();
      },
    });
  }

  transferencia(account: IAccount) {
    const ref = this.modalService.abrir(IngresoTransferenciaComponent, {
      cerrarConClickFueraDelModal: false,
    });

    ref.instancia.account = account;
    ref.instancia.accounts = this.accounts;

    ref.respuesta$.subscribe({
      next: () => { },
      error: () => {
        this.getCustomer();
      },
    });
  }
}
