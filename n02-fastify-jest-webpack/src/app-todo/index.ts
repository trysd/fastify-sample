import { conf } from '../.app-configure';
import app from '../fastify'
import { Static, Type } from '@sinclair/typebox'

export const Todo = Type.Required(Type.Object({
  date: Type.Optional(Type.String({ format: "date" })),
  token: Type.Optional(Type.String({
    minLength: 6,
    maxLength: 6,
    pattern: '^[0-9]+$'
  })),
  name: Type.String(),
  mail: Type.Optional(Type.String({ format: 'email' })),
}))
export type TodoType = Static<typeof Todo>

export const todo = () => {

  app.post<{ Body: TodoType, Reply: any }>(
  conf.baseAPIPath + '/todo',
  {
    schema: {
      headers: {
        type: 'object',
        required: ['Authorization'],
        properties: {
            'Authorization': { type: 'string' }
        }
      },
      body: Todo,
      response: {
        200: Todo
      },
    },
  },
  (request, reply) => {
    reply.status(200).send(request.body);
  })

  return app;
}
