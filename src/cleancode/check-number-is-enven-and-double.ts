/* 3.3 Melhorando Nomes e Estrutura */
/* Refatore o código abaixo para melhorar a clareza dos nomes e a modularidade:

  function c(x: number[]): number[] {
    const r = [];
    for (let i = 0; i < x.length; i++) {
      if (x[i] % 2 === 0) {
        r.push(x[i] * 2);
      }
    }
    return r;
  } 
*/
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