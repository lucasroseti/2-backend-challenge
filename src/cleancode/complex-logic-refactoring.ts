/* 3.2 Refatoração de Lógica Complexa */
/* Dado o código abaixo, refatore para melhorar a legibilidade e modularidade: 
  if (isPremium) {
    if (price > 100) {
      return price * 0.8;
    } else {
      return price * 0.9;
    }
  } else {
    if (price > 100) {
      return price * 0.9;
    } else {
      return price;
    }
  }
*/

const MAX_PRICE_LIMIT = 100

function calculateDiscount(price: number, isPremium: boolean): number {
  const priceIsGreaterThanHundred = price > MAX_PRICE_LIMIT

  const discount = isPremium
    ? priceIsGreaterThanHundred ? 0.8 : 0.9
    : priceIsGreaterThanHundred ? 0.9 : 1

  return price * discount
}
