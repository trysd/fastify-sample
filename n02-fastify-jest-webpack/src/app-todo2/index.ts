import { conf } from '../.app-configure';
import app from '../fastify/';

export const todo2 =  () => {
  app.get(conf.baseAPIPath + '/todo2', async function (request, reply) {
    return { hello: 'todo2' }
  })
  return app;
}
