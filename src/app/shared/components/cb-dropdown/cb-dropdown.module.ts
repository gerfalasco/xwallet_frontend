import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { EventosModule } from '@shared/eventos/eventos.module';
import { DropdownComponent } from './components/dropdown.component';

@NgModule({
  declarations: [DropdownComponent],
  imports: [
    CommonModule,
    // EventosModule
  ],
  exports: [
    DropdownComponent,

  ]
})
export class CbDropdownModule { }
