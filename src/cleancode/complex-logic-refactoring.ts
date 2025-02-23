const MAX_PRICE_LIMIT = 100

export function calculateDiscount(price: number, isPremium: boolean): number {
  const priceIsGreaterThanHundred = price > MAX_PRICE_LIMIT

  const discount = isPremium
    ? setDiscountPremium(priceIsGreaterThanHundred)
    : setDiscountRegular(priceIsGreaterThanHundred)

  return price * discount
}

function setDiscountPremium(priceIsGreaterThanHundred: boolean) {
  return priceIsGreaterThanHundred ? 0.8 : 0.9
}

function setDiscountRegular(priceIsGreaterThanHundred: boolean) {
  return priceIsGreaterThanHundred ? 0.9 : 1
}