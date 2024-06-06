import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[scrollTracker]'
})
export class ScrollTrackerDirective {
  private limiteAnterior = 0;

  @Output() scrollTracker: EventEmitter<any> = new EventEmitter<any>();
  @Input() finalScroll: boolean = false;

  @HostListener('scroll', ['$event'])
  onScroll(event: any) {
    if (!this.finalScroll) {
      let tracker = event.target;

      let limite = tracker.scrollHeight - tracker.clientHeight;

      if (limite > this.limiteAnterior) {
        if (event.target.scrollTop === limite) {
          this.adjustScroll(event);
          this.scrollTracker.emit();
        }
      }
    }
  }

  private adjustScroll(event: any) {
    let tracker = event.target;
    tracker.scrollTop -= 50;
  }
  constructor() { }

}
