import { calculate } from '../functions/calculate'

export function unionTypes() {
  console.log(calculate('add', 10, 5)) // 15
  console.log(calculate('divide', 10, 0)) // Error: Division by zero
}
