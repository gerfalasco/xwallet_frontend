import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresoComponent } from './views/ingreso/ingreso.component';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionTypeService } from '@cb/core/services/transaction-type.service';
import { MovementService } from '@cb/core/services/movement.service';
import { PipeModule } from '@cb/core/pipes';
import { DecimalesPipe } from '@cb/core/pipes/decimales.pipe';



@NgModule({
  declarations: [
    IngresoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModule,
  ],
  providers: [TransactionTypeService, MovementService, DecimalesPipe]
})
export class IntercambioModule { }
