import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresoComponent } from './views/ingreso/ingreso.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from '@cb/core/pipes';



@NgModule({
  declarations: [
    IngresoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PipeModule,
  ],
  exports: [
    IngresoComponent
  ]	
})
export class InversionModule { }
