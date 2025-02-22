import { FastifyInstance } from 'fastify'

import { typeGenerics } from '../typescript/type-generics'

interface TypeGenericsParams {
  field: string
}

export async function routes(app: FastifyInstance) {
  app.get('/type-generics/:field', async (req, res) => {
    const { field } = req.params as TypeGenericsParams

    const data = typeGenerics(field)

    return res.status(200).send(data)
  })
}