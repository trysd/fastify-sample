import fastify from 'fastify'
import { Mod } from './mod';

const server = fastify()

const moon = 'sun';

// http://localhost:3000/ping?a=1
server.get('/ping', async (request, reply) => {
  new Mod();
  console.log(request.query)
  reply.status(200).send({ 'message': 'pong' })
})

server.listen({
  port: 3000
}, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})
