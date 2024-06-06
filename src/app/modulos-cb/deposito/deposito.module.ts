import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaComponent } from './components/consulta/consulta.component';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
  {
    path: 'consulta',
    component: ConsultaComponent
  }
];

@NgModule({
  declarations: [
    ConsultaComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class DepositoModule { }
