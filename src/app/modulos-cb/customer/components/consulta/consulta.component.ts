import { Component, OnInit } from '@angular/core';
import { ICustomer } from '@cb/core/interfaces/customer.interface';
import { CustomerService } from '@cb/core/services/customer.service';
import { DataService } from '@cb/core/services/data.service';
import { IngresoModificacionComponent } from '@cb/customer/views/ingreso-modificacion.component';
import { ModalService } from 'src/app/shared/components/modal';
import { IDialogConfig } from 'src/app/shared/dialogo/interfaces/dialog-config';
import { DialogService } from 'src/app/shared/dialogo/services/dialog-service.service';

@Component({
  selector: 'cb-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss']
})
export class ConsultaComponent implements OnInit {
  customers: ICustomer[] = [];
  valorActualBuscador: string = '';
  sinDatos = false;
  buscando = false;
  cantidadPaginas: number = 40;
  texto: string = '';
  finalScroll: boolean = false;

  constructor(
    private modalService: ModalService,
    private customerService: CustomerService,
    private dialogService: DialogService,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.getCustomers({});
  }

  getCustomers({ texto }: { texto?: string }): void {
    this.buscando = true;
    this.customerService.getCustomers().subscribe({
      next: (customers: ICustomer[]) => {
        this.buscando = false;
        this.cantidadPaginas += 40;
        this.sinDatos = false;
        this.customers = [...customers];

        if (texto) {
          const lowerTexto = texto.toLowerCase();
          this.customers = this.customers.filter(customer =>
            customer.customerName.toLowerCase().includes(lowerTexto) ||
            customer.customerAddress.toLowerCase().includes(lowerTexto) ||
            customer.customerCity.toLowerCase().includes(lowerTexto)
          );
        }

        if (this.customers.length === 0) {
          this.sinDatos = true;
        }

        this.finalScroll = (customers.length < 40);
        this.customers = [...this.customers.sort((a, b) => a.customerName.localeCompare(b.customerName))]
      },
      error: (error) => {
        console.error(error);
        this.buscando = false;
        this.sinDatos = true;
      }
    });
  }

  seleccionarCustomer(customer: ICustomer): void {
    this.dataService.changeData(customer);
  }

  scrollBottom() {
    this.getCustomers({ texto: this.texto });
  }

  limpiarBusqueda() {
    this.valorActualBuscador = '';
    this.getCustomers({ texto: '' });
  }

  altaCustomer(): void {
    const ref = this.modalService.abrir(IngresoModificacionComponent, {
      cerrarConClickFueraDelModal: false,
    });

    ref.instancia.estado = 0;
    ref.instancia.titulo = 'Alta';

    ref.respuesta$.subscribe({
      next: () => { },
      error: () => { this.getCustomers({}); },
    });
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
      error: () => { this.getCustomers({}); },
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
            this.getCustomers({});

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
