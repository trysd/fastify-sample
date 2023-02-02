import { conf } from './.app-configure';
import app from './fastify';
import { todo } from "./app-todo"
import { todo2 } from "./app-todo2"

todo()
todo2()

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
