import { Directive, HostListener, Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { DecimalesPipe } from '../pipes/decimales.pipe';

@Directive({
  selector: '[cbDecimalFormat]'
})
export class DecimalFormatDirective {  
  @Input('cbDecimalFormat') decimalLimit: number = 2;

  constructor(private ngControl: NgControl, private decimalPipe: DecimalesPipe) {}

  @HostListener('blur', ['$event']) onBlur(event: Event) {
    const input = event.target as HTMLInputElement;
    const rawValue = input.value.replace(/\./g, '').replace(',', '.');
    const value = parseFloat(rawValue);

    if (!isNaN(value)) {
      const formattedValue = this.decimalPipe.transform(value, this.decimalLimit);
      this.ngControl.control?.setValue(formattedValue, { emitEvent: false });
    } else {
      this.ngControl.control?.setValue('', { emitEvent: false });
    }
  }

  @HostListener('keydown', ['$event']) onKeyDown(event: KeyboardEvent) {
    const allowedKeys = ['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete', 'Tab'];
    const input = event.target as HTMLInputElement;
    if (allowedKeys.includes(event.key) || (event.key === ',' && !input.value.includes(',')) || (event.key === '.' && !input.value.includes('.'))) {
      return;
    }
    if ((event.key >= '0' && event.key <= '9') || (event.key === ',' && !input.value.includes(',')) || (event.key === '.' && !input.value.includes('.'))) {
      return;
    }
    event.preventDefault();
  }

  @HostListener('input', ['$event']) onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9,.]/g, '');

    // // Ensure there's always a comma in the input
    // if (!input.value.includes(',')) {
    //   input.value += ',00';
    // }
  }
}
