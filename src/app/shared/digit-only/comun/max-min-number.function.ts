export function maxMinNumber({ value, decimales, min, max }: { value: string, decimales: number, min: number, max: number }): string {
  const num = Number(value.replace(",", "."));
  let numValidado = value;

  if (num < min) {
    numValidado = Math.max(num, min).toFixed(decimales).replace(".", ",");
  }

  if (num > max) {
    numValidado = Math.min(num, max).toFixed(decimales).replace(".", ",");
  }

  return numValidado;
}