/*1.2 Validação e Tipagem com Union Types */
/**
 * Implemente uma função que recebe uma string representando uma operação matemática 
 * (add, subtract, multiply, divide) e dois números. A função deve realizar a operação 
 * correspondente e lançar um erro caso a operação não seja suportada.
 */

import { calculate } from '../functions/calculate'

export function unionTypes() {
  console.log(calculate('add', 10, 5)) // 15
  console.log(calculate('divide', 10, 0)) // Error: Division by zero
}
