import { FastifyInstance } from 'fastify'

export async function routes(app: FastifyInstance) {
  app.get('/', async (req, res) => {
    const setup = 'Setup'
    return res.status(200).send({ setup })
  })
}