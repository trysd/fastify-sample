import { conf } from '../.app-configure';
import app from '../fastify'

// request example
//
// URL:
//   http://localhost:3000/test/v1/todo-b
//
export const todoB =  () => {
  app.get(conf.baseAPIPath + '/todo-b', async function (request, reply) {
    return { hello: 'todo-b' }
  })
  return app;
}
