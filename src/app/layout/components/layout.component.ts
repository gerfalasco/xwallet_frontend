import { Component, OnInit } from '@angular/core';
import { DataService } from '@cb/core/services/data.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  sidebarOpen: boolean = false;
  sidebarOpenMobile: boolean = false;
  sidebarHide: boolean = false;

  constructor(
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.sidebarHide = this.dataService.currentCustomer ? true : false;
    console.log(this.sidebarHide);
  }

  toggleMenu() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  statusSidebar(event: boolean) {
    this.sidebarOpenMobile = event;
  }
}
