import { conf } from '../../.app-configure';
import { tester } from '../../test-equip/test.equip';
import { todoB } from '..';
import { TodoService } from '../todo.service';

const todoService = TodoService.Instance();

let spy: jest.SpyInstance;

tester((req) => todoB().inject(req), [
  {
    name: 'normal flow basic',
    before: () => {
      spy = jest.spyOn(todoService, 'forMockTest').mockReturnValue('{"hello":"todo-b"}');
    },
    after: () => {
      expect(spy).toHaveBeenCalled();
      spy.mockRestore();
    },
    request: {
      method: 'GET',
      url: conf.baseAPIPath + '/todo-b',
      headers: {
        Authorization: 'abc123'
      }
    },
    expectedValue: {
      'body': '{"hello":"todo-b"}',
      'statusCode': 200
    }
  }
])
