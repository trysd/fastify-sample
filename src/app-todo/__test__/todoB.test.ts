import { conf } from '../../.app-configure';
import { tester } from '../../test-equip/test-equip';
import { todoB } from '..';

tester((req) => todoB().inject(req), [
  {
    name: 'normal flow basic',
    request: {
      method: 'GET',
      url: conf.baseAPIPath + '/todo-b',
      headers: {
        Authorization: 'abc123'
      }
    },
    response: {
      'body': '{"hello":"todo-b"}',
      'statusCode': 200
    }
  }
])
