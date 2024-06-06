import { Component, OnInit } from '@angular/core';
import { ICustomer } from '@cb/core/interfaces/customer.interface';
import { DataService } from '@cb/core/services/data.service';

@Component({
  selector: 'cb-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {
  sidebarHidden: boolean = true;
  showUserData: boolean = false;
  currentCustomer: ICustomer | null = null;
  intervalId: any;

  showData() {
    this.showUserData = true;
  }

  hideData() {
    this.showUserData = false;
  }

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.dataService.customerSource$.subscribe({
      next: (customer: ICustomer | null) => {
        if (this.currentCustomer !== this.dataService.currentCustomer) {
          this.currentCustomer = this.dataService.currentCustomer;
        }
      }
    });
  }
}
