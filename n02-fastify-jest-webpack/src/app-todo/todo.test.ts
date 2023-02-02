import { conf } from '../.app-configure';
import { tester } from '../test-equip/test-equip';
import { todo } from './';

tester((req) => todo().inject(req), [
  {
    name: 'Normal flow basic',
    request: {
      method: 'POST',
      url: conf.baseAPIPath + '/todo',
      headers: {
        Authorization: 'abc123'
      },
      payload: {
        date: '2023-02-02',
        mail: 'a@a.a',
        token: 123456,
        name: 'a'
      }
    },
    response: {
      'body': '{"date":"2023-02-02","token":"123456","name":"a","mail":"a@a.a"}',
      'statusCode': 200
    }
  }

])
