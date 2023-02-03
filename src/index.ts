import app from './fastify';
import { conf } from './.app-configure';
import { todoA, todoB } from "./app-todo"

// By commenting out here, you can make the API unavailable.
// The unavailable API will return a 404.
todoA()
todoB()

app.listen({
  port: 3000,
  host: (conf.mode === 'dev'
    ? '127.0.0.1'
    : '0.0.0.0')
},(err: Error | null, address: string) => {
  if (err) {
    app.log.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
