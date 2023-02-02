import { conf } from '../.app-configure';
import { tester } from '../test-equip/test-equip';
import { todo2 } from './';

// npx ts-node ./src/app-todo2/todo2.test.ts
tester((req) => todo2().inject(req), [
  {
    name: 'normal flow basic',
    request: {
      method: 'GET',
      url: conf.baseAPIPath + '/todo2',
      headers: {
        Authorization: 'abc123'
      }
    },
    response: {
      'body': '{"hello":"todo2"}',
      'statusCode': 200
    }
  }
])
