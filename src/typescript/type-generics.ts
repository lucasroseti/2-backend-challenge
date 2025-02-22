/** 1. Testes de TypeScript */
/**
 * 1.1 Manipulação de Tipos e Generics
 * Implemente uma função que recebe um array de objetos e retorna um novo array 
 * contendo apenas os valores de uma chave específica. Utilize Generics 
 * para garantir a tipagem.
 */

import { extractValues } from '../functions/extract-values'

interface DataProps {
  id: number
  name: string
}

export function typeGenerics(field: string) {
  const data: DataProps[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' }
  ]
  
  return extractValues<DataProps>(data, field as keyof DataProps)
}