import { Component, EventEmitter, HostListener, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cb-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output('statusSidebar')
  statusSidebarEmiter = new EventEmitter<boolean>();
  sidebarOpenMobile: boolean = false;

  windowSize: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.windowSize = window.innerWidth;
  }

  constructor() { }

  ngOnInit(): void {
  }

  statusSidebar() {
    this.sidebarOpenMobile = !this.sidebarOpenMobile;
    this.statusSidebarEmiter.emit(this.sidebarOpenMobile);
  }
}
