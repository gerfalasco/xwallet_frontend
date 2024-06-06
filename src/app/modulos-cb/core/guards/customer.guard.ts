import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DataService } from '@cb/core/services/data.service';

@Injectable()
export class CustomerGuard implements CanActivate {
  constructor(private dataService: DataService, private router: Router) { }

  canActivate(): boolean {
    if (this.dataService.currentCustomer) {
      return true;
    } else {
      this.router.navigate(['/core-bancario/cliente/consulta']);
      return false;
    }
  }
}
