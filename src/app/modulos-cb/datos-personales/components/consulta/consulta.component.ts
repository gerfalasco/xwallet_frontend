import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ICustomer } from '@cb/core/interfaces/customer.interface';
import { DataService } from '@cb/core/services/data.service';

@Component({
  selector: 'cb-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.scss'],

})
export class ConsultaComponent implements OnInit {
  customers: ICustomer[] = [];
  selectedCustomer!: ICustomer | null;
  grupoCustomer: FormGroup;

  constructor(
    private dataService: DataService,
    private fb: FormBuilder,
  ) {
    this.grupoCustomer = this.fb.group({
      customerId: [''],
      customerName: [''],
      customerAddress: [''],
      customerCity: [''],
      customerEmail: [''],
      customerPhone: ['']
    });
  }

  ngOnInit(): void {
    this.selectedCustomer = this.dataService.currentCustomer;
    this.grupoCustomer.patchValue(this.selectedCustomer!);
    this.grupoCustomer.disable();
  }

  getName(): string {
    return this.selectedCustomer?.customerName || '';
  }
}
