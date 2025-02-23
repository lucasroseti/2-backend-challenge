import { FastifyInstance } from 'fastify'

import { cleanCodeRoutes } from './cleancode'

export async function routes(app: FastifyInstance) {
  app.register(cleanCodeRoutes, { prefix: '/cleancode' })
}