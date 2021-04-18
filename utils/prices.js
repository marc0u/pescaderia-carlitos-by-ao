export function parseCurrency(currency) {
  return currency
    ? "$ " + currency.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    : "$ 0";
}
