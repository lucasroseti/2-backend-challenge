import { FastifyInstance } from 'fastify'

import { typeScriptRoutes } from './typescript'

export async function routes(app: FastifyInstance) {
  app.register(typeScriptRoutes, { prefix: '/typescript' })
}
