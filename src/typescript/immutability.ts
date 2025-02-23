import { makeAllPositive } from '../functions/makeAllPositive'

export function immutability() {
  const numbers = [-1, 2, -3, 4]
  const result = makeAllPositive(numbers)

  return { numbers, result }
}
