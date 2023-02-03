import fastify from 'fastify'
import { TypeBoxTypeProvider } from '@fastify/type-provider-typebox'

const app = fastify({
  // logger: {
  //   level: 'info',
  //   transport: {
  //     target: 'pino-pretty' // npm i pino-pretty
  //   }
  // }
}).withTypeProvider<TypeBoxTypeProvider>();
export default app;