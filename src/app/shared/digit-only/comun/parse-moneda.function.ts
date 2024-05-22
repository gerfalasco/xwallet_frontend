export function parseNumber(value: string): number {
  return parseFloat(value.replace("$", "").replace(/\./g, '').replace(",", ".").trim());
}