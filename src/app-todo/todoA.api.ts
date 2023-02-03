import { conf } from '../.app-configure';
import app from '../fastify'
import { Static, Type } from '@sinclair/typebox'

export const TodoA = Type.Required(Type.Object({
  date: Type.Optional(Type.String({ format: "date" })),
  token: Type.Optional(Type.String({
    minLength: 6,
    maxLength: 6,
    pattern: '^[0-9]+$'
  })),
  name: Type.String(),
  mail: Type.Optional(Type.String({ format: 'email' })),
}))
export type TodoAType = Static<typeof TodoA>

export const todoA = () => {

  // request example
  //
  // URL:
  //   http://localhost:3000/test/v1/todo-a
  //
  // BODY
  //   {
  //     "mail": "ssss@ss.ccc",
  //     "token": 123456,
  //     "name": "nnn",
  //     "date": "2023-01-01"
  //   }
  //
  // HEADER
  //   Authorization: auth123
  //
  app.post<{ Body: TodoAType, Reply: any }>(
  conf.baseAPIPath + '/todo-a',
  {
    schema: {
      headers: {
        type: 'object',
        required: ['Authorization'],
        properties: {
            'Authorization': { type: 'string' }
        }
      },
      body: TodoA,
      response: {
        200: TodoA
      },
    },
  },
  (request, reply) => {
    reply.status(200).send(request.body);
  })

  return app;
}
