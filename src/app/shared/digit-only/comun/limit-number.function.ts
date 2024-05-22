export function limitNumber({ value, limit }: { value: string, limit: number }): string {

  const partes = value.split(/,|\./);
  const parteIzquierda = partes[0].slice(0, limit); // corto hasta donde indicamos
  const parteDerecha = partes[1]; // obtengo la parte decimal

  return parteIzquierda + "," + parteDerecha;
}