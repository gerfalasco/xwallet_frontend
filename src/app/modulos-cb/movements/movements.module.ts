import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from '@cb/core/pipes';



@NgModule({
  declarations: [
    ConsultaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PipeModule,
  ],
  exports: [
    ConsultaComponent
  ]
})
export class MovementsModule { }
