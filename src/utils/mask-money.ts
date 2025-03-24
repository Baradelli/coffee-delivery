export function maskMoney(value: number): string {
  if (isNaN(value)) {
    return "0,00";
  }

  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}
