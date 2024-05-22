import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[cbHostModal]',
})
export class HostModalDirective {
  constructor(
    public vcr: ViewContainerRef
  ) { }
}
