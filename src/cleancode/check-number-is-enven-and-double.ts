const MODULE_BASE = 2

export function checkNumberIsEvenAndDouble(items: number[]): number[] {
  return items
    .filter((item) => checkNumberIsEven(item))
    .map((item) => doubleNumber(item))
}

function checkNumberIsEven(number: number) {
  return number % MODULE_BASE === 0
}

function doubleNumber(number: number) {
  return number * 2
}