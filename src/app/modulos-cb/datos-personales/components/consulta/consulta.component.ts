import { Component, OnInit, ViewChild } from '@angular/core';
import { ICustomer } from '@cb/core/interfaces/customer.interface';
import { CustomerService } from '@cb/core/services/customer.service';
import { IngresoModificacionComponent } from '@cb/datos-personales/views/ingreso-modificacion/ingreso-modificacion.component';
import { IDialogConfig } from 'src/app/shared/dialogo/interfaces/dialog-config';
import { DialogService } from 'src/app/shared/dialogo/services/dialog-service.service';
import { TipoMensajeType } from 'src/app/shared/dialogo/types/tipo-mensaje.type';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'cb-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss'],

})
export class ConsultaComponent implements OnInit {
  customers: ICustomer[] = [];

  constructor(
    private modalService: ModalService,
    private customerService: CustomerService,
    private dialogService: DialogService,
  ) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers().subscribe((customers: ICustomer[]) => {
      this.customers = [...customers];
    });
  }

  verCustomer(customer: ICustomer): void {
    const ref = this.modalService.abrir(IngresoModificacionComponent, {
      cerrarConClickFueraDelModal: false,
    });

    ref.instancia.customer = customer;
    ref.instancia.titulo = 'Detalle: ' + customer.customerName;
  }

  editarCustomer(customer: ICustomer): void {
    const ref = this.modalService.abrir(IngresoModificacionComponent, {
      cerrarConClickFueraDelModal: false,
    });

    ref.instancia.customer = customer;
    ref.instancia.estado = 1;
    ref.instancia.titulo = 'Modificación: ' + customer.customerName;

    ref.respuesta$.subscribe({
      next: () => { },
      error: () => { this.getCustomers(); },
    });
  }

  altaCustomer(): void {
    const ref = this.modalService.abrir(IngresoModificacionComponent, {
      cerrarConClickFueraDelModal: false,
    });

    ref.instancia.estado = 0;
    ref.instancia.titulo = 'Alta';

    ref.respuesta$.subscribe({
      next: () => { },
      error: () => { this.getCustomers(); },
    });
  }

  eliminarCustomer(customer: ICustomer): void {
   let dialogConfig = {
      title: 'Eliminar cliente',
      message: '¿Está seguro que desea eliminar el cliente seleccionado?',
      tipo: 'advertencia',
      confirmText: 'Aceptar',
      cancelText: 'Cancelar',
    } as IDialogConfig;

    this.dialogService.open(dialogConfig).then((aceptar: boolean) => {
      if (aceptar) {
          this.customerService.deleteCustomer({ customerId: customer.customerId }).subscribe({
            next: () => {
              this.getCustomers();

              dialogConfig = {
                title: 'Cliente eliminado',
                message: 'El cliente seleccionado ha sido eliminado correctamente.',
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
