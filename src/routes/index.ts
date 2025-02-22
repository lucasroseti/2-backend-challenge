import { FastifyInstance } from 'fastify'

import { immutability } from '../typescript/immutability'
import { typeGenerics } from '../typescript/type-generics'
import { unionTypes } from '../typescript/union-types'

interface TypeGenericsParams {
  field: string
}

export async function routes(app: FastifyInstance) {
  app.get('/type-generics/:field', async (req, res) => {
    const { field } = req.params as TypeGenericsParams

    const data = typeGenerics(field)

    return res.status(200).send(data)
  }),

  app.get('/type-union', async (_req, res) => {
    const data = unionTypes()

    return res.status(200).send(data)
  }),

  app.get('/immutability', async (_req, res) => {
    const data = immutability()

    return res.status(200).send(data)
  })
}