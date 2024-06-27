import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresoComponent } from './views/ingreso/ingreso.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IngresoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    IngresoComponent
  ]	
})
export class InversionModule { }
