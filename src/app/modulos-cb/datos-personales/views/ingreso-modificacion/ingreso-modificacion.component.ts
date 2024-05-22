import { Component, OnInit } from '@angular/core';
import { ICustomer } from '@cb/core/interfaces/customer.interface';

@Component({
  selector: 'cb-ingreso-modificacion',
  templateUrl: './ingreso-modificacion.component.html',
  styleUrls: ['./ingreso-modificacion.component.scss']
})
export class IngresoModificacionComponent implements OnInit {
  customer!: ICustomer;

  constructor() { }

  ngOnInit(): void {
  }

}
