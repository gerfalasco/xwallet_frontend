import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";
import { parseNumber } from "../comun/parse-moneda.function";
import { formatoMoneda } from "../comun/format-moneda.function";

export class MaxAndMinValidator {
  static createValidator(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
      const value = parseNumber(control.value as string);
      if (value < min) return { min: formatoMoneda(min, 2, "$") };
      if (value > max) return { max: formatoMoneda(max, 2, "$") };
      return null;
    };
  }
}
