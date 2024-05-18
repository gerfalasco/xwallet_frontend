import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/components/header.component';
import { HeaderMenuComponent } from './components/header/components/header-menu/header-menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarMenuComponent } from './components/sidebar/sidebar-menu/sidebar-menu.component';



@NgModule({
  declarations: [LayoutComponent, HeaderComponent, HeaderMenuComponent, FooterComponent, SidebarComponent, SidebarMenuComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
