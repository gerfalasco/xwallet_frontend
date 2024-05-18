import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@layout/layout.module';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@layout/components/layout.component';

const ROUTES: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "retiro",
        loadChildren: () =>
          import("@cb/retiro").then((m) => m.RetiroModule),
      },
      {
        path: "deposito",
        loadChildren: () =>
          import("@cb/deposito").then((m) => m.DepositoModule),
      },
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class ModulosCbModule { }
