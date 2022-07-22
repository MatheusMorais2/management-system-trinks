export default function formatCurrency(value: number) {
  if (!value) return "R$00,00";

  let returnValue = (value / 100).toFixed(2);
  returnValue = returnValue.replace(".", ",");
  returnValue = `R$${returnValue}`;

  return returnValue;
}
