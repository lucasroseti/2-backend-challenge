import { app } from './app'
import { routes } from './routes'

app.register(routes)

app.listen({
  host: '0.0.0.0',
  port: 3333
}).then(() => {
  console.log('HTTP Server Running')
})