import { Component, OnInit } from '@angular/core';
import { ICustomer } from '@cb/core/interfaces/customer.interface';
import { CustomerService } from '@cb/core/services/customer.service';
import { IngresoModificacionComponent } from '@cb/datos-personales/views/ingreso-modificacion/ingreso-modificacion.component';
import { ModalService } from 'src/app/shared/services/modal.service';

@Component({
  selector: 'cb-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss'],

})
export class ConsultaComponent implements OnInit {
  customers: ICustomer[] = [{
    customerId: 1,
    customerName: 'Juan mario lopez',
    customerAddress: 'Calle falsa 123',
    customerCity: 'Lima',
    customerEmail: 'fdfs@fgfdf.as',
    customerPhone: '123456789'
  },
  {
    customerId: 2,
    customerName: 'Pedro',
    customerAddress: 'Calle 2',
    customerCity: 'Lima',
    customerEmail: '',
    customerPhone: ''
  }];

  constructor(
    private modalService: ModalService,    
    private customerService: CustomerService,
  ) {

    // this.grupoCustomer.disable();
  }

  ngOnInit(): void {
    this.customerService.getCustomer().subscribe((data: any) => {
      console.log(data);
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
  }

  altaCustomer(): void {
    const ref = this.modalService.abrir(IngresoModificacionComponent, {
      cerrarConClickFueraDelModal: false,
    });

    ref.instancia.estado = 0;
    ref.instancia.titulo = 'Alta';
  }
}
