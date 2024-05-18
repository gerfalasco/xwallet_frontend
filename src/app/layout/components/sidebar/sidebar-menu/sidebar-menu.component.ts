import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cb-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {
  sidebarHidden: boolean = true;
  showUserData: boolean = false;

  showData() {
    this.showUserData = true;
  }

  hideData() {
    this.showUserData = false;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
