/** 1.3 Imutabilidade e Manipulação de Arrays */
/**
 * Implemente uma função que recebe uma lista de números e retorna uma nova 
 * lista onde todos os números negativos são transformados em positivos, 
 * sem modificar a lista original.
 */

import { makeAllPositive } from '../functions/makeAllPositive'

export function immutability() {
  const numbers = [-1, 2, -3, 4];
  const result = makeAllPositive(numbers)

  return { numbers, result }
}
