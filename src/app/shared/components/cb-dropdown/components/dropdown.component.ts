import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'cb-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements AfterViewInit {

  @ViewChild('boton', { static: true }) botonRef!: ElementRef<HTMLElement>;
  @ViewChild('menu', { static: true }) menuRef!: ElementRef<HTMLElement>;
  
  constructor(private elementRef: ElementRef) { }

  showMenu = false;

  ngAfterViewInit(): void {
    // query for all li elements in the menu
    const liElements = this.menuRef.nativeElement.querySelectorAll('li');
    
    // add click listener to each li
    liElements.forEach(li => {
      li.addEventListener('click', () => {
        this.showMenu = false;
      });
    });
  }

  toggleContent(): void {

    const newShowContent = !this.showMenu;

    if(newShowContent) {

      const menuWidth = this.menuRef.nativeElement.offsetWidth ;
      const menuHeight = this.menuRef.nativeElement.offsetHeight ; 

      const botonRect = this.botonRef.nativeElement.getBoundingClientRect();
      const botonTop = botonRect.top ;
      const botonLeft = botonRect.left ;

      const windowWidth = window.innerWidth ;
      const windowHeight = window.innerHeight ;

      let newMenuLeft = botonLeft + 20;
      if(botonLeft + menuWidth > windowWidth) {
        newMenuLeft = botonLeft - menuWidth;
      } 

      let newMenuTop = botonTop + 20;
      if(botonTop + menuHeight > windowHeight) {
        newMenuTop = botonTop - menuHeight;
      }

      this.menuRef.nativeElement.style.top = newMenuTop + 'px';
      this.menuRef.nativeElement.style.left = newMenuLeft + 'px';

    }

    this.showMenu = newShowContent;
    
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick($event: MouseEvent): void {
    const clickedInside = this.elementRef?.nativeElement.contains($event.target) as boolean ?? false;
    if (!clickedInside) {
      this.showMenu = false;
    }
  }

}
