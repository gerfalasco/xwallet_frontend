import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CustomerService } from '@cb/core/services/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from '@cb/core/services/accounts.service';
import { CbDropdownModule } from 'src/app/shared/components/cb-dropdown/cb-dropdown.module';
import { IngresoModificacionComponent } from './views/ingreso-modificacion/ingreso-modificacion.component';
import { ModalService } from 'src/app/shared/services/modal.service';
import { DialogComponent } from 'src/app/shared/dialogo/components/dialog/dialog.component';
import { DialogService } from 'src/app/shared/dialogo/services/dialog-service.service';
import { DialogoModule } from 'src/app/shared/dialogo';

const ROUTES: Routes = [
  {
    path: 'consulta',
    component: ConsultaComponent
  }
];

@NgModule({
  declarations: [
    ConsultaComponent,
    IngresoModificacionComponent
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
    AccountService,
    CustomerService,
    ModalService,
    DialogService,
  ]
})
export class DatosPersonalesModule { }
