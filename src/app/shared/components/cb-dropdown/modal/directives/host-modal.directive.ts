import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[phyHostModal]',
})
export class HostModalDirective {
  constructor(
    public vcr: ViewContainerRef
  ) { }
}
