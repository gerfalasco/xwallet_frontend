import { formatCurrency } from "@angular/common";

export function formatoMoneda(value: number, cantidadDecimales: number = 2, signo: string = ""): string {
  return formatCurrency(value, "es-AR", signo, "ARS", `1.${cantidadDecimales}-${cantidadDecimales}`);
}