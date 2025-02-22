export function makeAllPositive(numbers: number[]) {
  return numbers.map((number) => {
    return Math.abs(number)
  })
}