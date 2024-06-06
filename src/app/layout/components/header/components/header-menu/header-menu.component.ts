// header-menu.component.ts
import { Component } from '@angular/core';
import { DataService } from '@cb/core/services/data.service';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'cb-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent {

  constructor(    
    private authService: AuthService,
    private dataService: DataService
  ) { }

  cerrarSesion() {
    this.authService.logout();
  }

  clearClient(){
    this.dataService.changeData(null);
  }
}
