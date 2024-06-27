import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@layout/layout.module';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from '@layout/components/layout.component';
import { DataService } from './core/services/data.service';

const ROUTES: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "cliente",
        loadChildren: () =>
          import("@cb/customer").then((m) => m.CustomerModule),
      },
      {
        path: "cuenta",
        loadChildren: () =>
          import("@cb/account").then((m) => m.AccountModule),
      },
      {
        path: "datos-personales",
        loadChildren: () =>
          import("@cb/datos-personales").then((m) => m.DatosPersonalesModule),
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
  ],
  providers: [DataService],
})
export class ModulosCbModule { }
