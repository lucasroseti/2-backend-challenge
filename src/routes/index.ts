import { FastifyInstance } from 'fastify'

import { typeScriptRoutes } from './typescript'
import { cleanCodeRoutes } from './cleancode'

export async function routes(app: FastifyInstance) {
  app.register(cleanCodeRoutes, { prefix: '/cleancode' })
  app.register(typeScriptRoutes, { prefix: '/typescript' })
}
