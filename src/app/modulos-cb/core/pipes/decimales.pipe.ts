import { DecimalPipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimales'
})
export class DecimalesPipe implements PipeTransform {

  constructor(
    private decimalPipe: DecimalPipe
  ) { }

  transform(value: number, cantidad: number): string {
    // Redondear el número al número especificado de decimales
    const roundedValue = value.toFixed(cantidad);

    if (roundedValue !== null) {
      // Reemplazar el punto por la coma
      const formattedValue = roundedValue.replace('.', ',');

      // Separar la parte entera de la parte decimal
      const partes = formattedValue.split(',');

      // Formar el resultado con el separador de miles y el punto y coma
      const parteEntera = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
      const parteDecimal = partes[1].length === 1 ? partes[1].padEnd(2) : partes[1];

      return `${parteEntera},${parteDecimal}`;
    } else {
      return '';
    }
  }
}
