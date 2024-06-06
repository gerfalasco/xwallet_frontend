import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CustomerService } from '@cb/core/services/customer.service';
import { HttpClientModule } from '@angular/common/http';
import { AccountService } from '@cb/core/services/accounts.service';
import { DigitOnlyModule } from 'src/app/shared/digit-only/digit-only.module';
import { IngresoModificacionComponent } from './views/ingreso-modificacion/ingreso-modificacion.component';
import { ModalService } from 'src/app/shared/components/modal';
import { DialogService } from 'src/app/shared/dialogo/services/dialog-service.service';
import { CbDropdownModule } from 'src/app/shared/components/cb-dropdown/cb-dropdown.module';
import { DialogoModule } from 'src/app/shared/dialogo';
import { DataService } from '@cb/core/services/data.service';
import { SharedModule } from 'src/app/shared/shared.module';

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
    DialogService
  ]
})
export class AccountModule { }
