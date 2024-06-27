import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresoComponent } from './views/ingreso/ingreso.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DecimalesPipe } from '@cb/core/pipes/decimales.pipe';
import { PipeModule } from '@cb/core/pipes';



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
  providers: [DecimalesPipe]
})
export class TransaccionModule { }
