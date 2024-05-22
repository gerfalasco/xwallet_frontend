import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CustomerService } from '@cb/core/services/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from '@cb/core/services/accounts.service';

const ROUTES: Routes = [
  {
    path: 'consulta',
    component: ConsultaComponent
  }
];

@NgModule({
  declarations: [
    ConsultaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule, 
    HttpClientModule,
    RouterModule.forChild(ROUTES),
  ],
  exports: [
    ConsultaComponent
  ],
  providers: [
    AccountService,
    CustomerService,
  ]
})
export class DatosPersonalesModule { }
