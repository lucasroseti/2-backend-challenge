import { FastifyInstance } from 'fastify'

import { calculateDiscount } from '../cleancode/complex-logic-refactoring'
import { checkNumberIsEvenAndDouble } from '../cleancode/check-number-is-enven-and-double'
import { processItems } from '../cleancode/code-refactor'

export async function cleanCodeRoutes(app: FastifyInstance) {
  app.get('/code-refactor', async (_req, res) => {
    const items = [
      { name: 'Notebook', price: 2500 },
      { name: 'Smartphone', price: 1200 },
      { name: 'Fones de Ouvido', price: 90 },
      { name: 'Mouse Gamer', price: 100 },
      { name: 'Smartwatch', price: 650 },
    ]

    processItems(items)

    return res.status(200).send()
  }),

  app.get('/complex-refactor', async (_req, res) => {
    console.log(calculateDiscount(100, true))
    console.log(calculateDiscount(90, true))
    console.log(calculateDiscount(150, false))
    console.log(calculateDiscount(80, false))

    return res.status(200).send()
  })

  app.get('/check-even-double', async (_req, res) => {
    const items = [1,2,3,4,5,6,7,8,9,10]

    const data = checkNumberIsEvenAndDouble(items)

    return res.status(200).send(data)
  })
}
