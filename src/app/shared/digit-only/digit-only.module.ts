import { NgModule, ModuleWithProviders } from '@angular/core';
import { Route } from '@angular/router';

import { DigitOnlyDirective } from './digit-only.directive';

@NgModule({
  declarations: [
    DigitOnlyDirective
  ],
  exports: [
    DigitOnlyDirective
  ]
})

export class DigitOnlyModule {
  static forRoot(): ModuleWithProviders<Route> {
    return {
      ngModule: DigitOnlyModule
    };
  }
}
