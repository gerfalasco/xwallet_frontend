import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
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
  customer: ICustomer = {} as ICustomer;
  customers: ICustomer[] = [{
    Id: 1,
    Name: 'Juan mario lopez',
    Address: 'Calle falsa 123',
    City: 'Lima',
    Email: 'fdfs@fgfdf.as',
    Phone: '123456789'
  },
  {
    Id: 2,
    Name: 'Pedro',
    Address: 'Calle 2',
    City: 'Lima',
    Email: '',
    Phone: ''
  }];
  grupoCustomer: FormGroup;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService,
    private modalService: ModalService
  ) {
    this.grupoCustomer = this.fb.group({
      Id: [''],
      Name: [''],
      Address: [''],
      City: [''],
      Email: [''],
      Phone: ['']
    });

    // this.grupoCustomer.disable();
  }

  ngOnInit(): void {
    // this.customerService.getApi().subscribe((data: string) => {
    //   console.log(data);
    // });

    this.customerService.getCustomer().subscribe((customer: ICustomer) => {
      this.customer = customer;
      this.grupoCustomer.patchValue(this.customer);
    });
  }

  verCustomer(customer: ICustomer): void {
    const ref = this.modalService.abrir(IngresoModificacionComponent, {
      cerrarConClickFueraDelModal: false,
    });

    ref.instancia.customer = customer;
  }

}
