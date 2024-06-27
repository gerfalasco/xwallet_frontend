import { NgModule } from '@angular/core';
import { DecimalesPipe } from './decimales.pipe';
import { DecimalFormatDirective } from '../directives/decimal-format.directive';



@NgModule({
  declarations: [
    DecimalesPipe,
    DecimalFormatDirective,
  ],
  imports: [
  ],
  exports: [
    DecimalesPipe,
    DecimalFormatDirective,
  ]
})
export class PipeModule { }
