import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CustomerService } from '@cb/core/services/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { CbDropdownModule } from 'src/app/shared/components/cb-dropdown/cb-dropdown.module';
import { ModalService } from 'src/app/shared/services/modal.service';
import { DialogService } from 'src/app/shared/dialogo/services/dialog-service.service';
import { DialogoModule } from 'src/app/shared/dialogo';

const ROUTES: Routes = [
  {
    path: 'consulta/:cliente',
    component: ConsultaComponent
  }
];

@NgModule({
  declarations: [
    ConsultaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule, 
    HttpClientModule,
    RouterModule.forChild(ROUTES),
    CbDropdownModule,
    DialogoModule,
  ],
  exports: [
    ConsultaComponent
  ],
  providers: [
    CustomerService,
    ModalService,
    DialogService
  ]
})
export class DatosPersonalesModule { }
