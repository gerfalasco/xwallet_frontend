import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';
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
import { CurrencyService } from '@cb/core/services/currency.service';
import { AccountTypeService } from '@cb/core/services/account-type.service';
import { MovementsModule } from '@cb/movements';
import { PipeModule } from '@cb/core/pipes';
import { IntercambioModule } from '@cb/intercambio';
import { InversionModule } from '@cb/inversion';

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
    PipeModule,
    IntercambioModule,
    InversionModule,
  ],
  exports: [
    ConsultaComponent
  ],
  providers: [
    AccountService,
    CustomerService,
    CurrencyService ,
    AccountTypeService,
    ModalService,
    DialogService,
    DecimalPipe,
  ]
})
export class AccountModule { }
