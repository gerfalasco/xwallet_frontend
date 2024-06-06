import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { CustomerService } from '@cb/core/services/customer.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CbDropdownModule } from 'src/app/shared/components/cb-dropdown/cb-dropdown.module';
import { ScrollTrackerDirective } from './directives/scroll-tracker.directive';
import { IngresoModificacionComponent } from './views/ingreso-modificacion.component';
import { ModalService } from 'src/app/shared/components/modal';
import { DialogService } from 'src/app/shared/dialogo/services/dialog-service.service';

const ROUTES: Routes = [
  {
    path: 'consulta',
    component: ConsultaComponent
  }
];

@NgModule({
  declarations: [
    ConsultaComponent,
    IngresoModificacionComponent,
    ScrollTrackerDirective,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(ROUTES),
    CbDropdownModule,
  ],
  exports: [ConsultaComponent],
  providers: [
    CustomerService,
    ModalService,
    DialogService,]
})
export class CustomerModule { }
