import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ICustomer } from '@cb/core/interfaces/customer.interface';
import { CustomerService } from '@cb/core/services/customer.service';

@Component({
  selector: 'cb-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss'],

})
export class ConsultaComponent implements OnInit {
  customer: ICustomer = {} as ICustomer;
  grupoCustomer: FormGroup;

  constructor(
    private fb: FormBuilder,
    private customerService: CustomerService
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
    this.customerService.getCustomer().subscribe((customer: ICustomer) => {
      this.customer = customer;
      this.grupoCustomer.patchValue(this.customer);
    });
  }

}
