import { conf } from '../.app-configure';
import app from '../fastify'

import { TodoService } from './todo.service';
const todoService = TodoService.Instance();

// request example
// http://localhost:3000/test/v1/todo-b
export const todoB =  () => {
  app.get(conf.baseAPIPath + '/todo-b', async function (request, reply) {
    const res = todoService.forMockTest();
    console.log("res:", res)
    return res
  })
  return app;
}
