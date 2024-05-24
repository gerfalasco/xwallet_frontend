import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { ReactiveFormsModule } from '@angular/forms';
import { SettingsService } from './services/settings.service';
import { HttpClientModule } from '@angular/common/http';

const ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'core-bancario', loadChildren: () => import('@cb/modulos-cb.module').then(m => m.ModulosCbModule), canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,    
    HttpClientModule,
  ],
  providers: [AuthService, AuthGuard, SettingsService], // Agrega AuthGuard como un proveedor
  bootstrap: [AppComponent]
})
export class AppModule  {
  constructor(
    private settings: SettingsService,
  ) {
    this.settings.get();
  }
}
