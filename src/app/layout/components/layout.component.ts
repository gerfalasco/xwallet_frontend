import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  sidebarOpen: boolean = false;
  sidebarOpenMobile: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  statusSidebar(event: boolean) {
    this.sidebarOpenMobile = event;
  }
}
