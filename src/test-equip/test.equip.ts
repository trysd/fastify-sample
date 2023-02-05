import { InjectOptions, LightMyRequestResponse } from 'fastify'

/**
 * An interface that encompasses the resources for sending.
 */
export type ResourceItem = {
  /** test name */
  name: string,
  /**
   * request items
   * See InjectOptions of fastify version 4 series.
   */
  request: InjectOptions,
  /**
   * expected value
   * The expected response refers to the outcome desired or predicted for
   * a given response to a request made using a certain interface or system.
   * It may refer to the expected format, content, or status code of the response,
   * among other things. The expected response is used as a comparison point to
   * determine if the actual response received meets the desired outcome.
   */
  expectedValue: { [keys: string]: number | string },
  /**
   * before function
   * You can specify a callback function to be run before the test is carried out.
   * Jest also has convenient features of 'beforeEach', 'beforeAll'.
   */
  before?: () => void,
  /**
   * end function
   * You can specify a callback function that will be executed after the test is run.
   * Jest also has convenient features of 'afterAll', and 'afterEach'.
   */
  after?: () => void
}

/**
 * The actual implementation of the test process is in this callback function.
 * The callback for returning the result of fastify.inject is specified,
 * but the user only needs to set the fastify instance with the test api loaded,
 * following the example of todo.
 * 
 * Usage
 *   tester((req) => todoB().inject(req), [{resource}, {resource}]
 * 
 * @param requester A callback function to send test requests to fastify
 * @param resourceItem An object that contains the resources for sending
 */
export const tester = (
  requester: (req: InjectOptions) => Promise<LightMyRequestResponse>,
  resourceItem: ResourceItem[]
) => {
  resourceItem.forEach(r => {

    if (r.before !== undefined) beforeEach(() => {
      if (r.before !== undefined) r.before()
    })

    test(r.name, async () => {
      // const response = await app.inject(r.request)
      const response = await requester(r.request)
      Object.keys(r.expectedValue).forEach(key => {
        switch (key) {
          case 'statusCode': {
            expect(response.statusCode).toEqual(r.expectedValue[key]);
            break
          }
          case 'body': {
            expect(response.body).toEqual(r.expectedValue[key]);
            break
          }
        }
      });
    });

    if (r.after !== undefined) afterEach(() => {
      if (r.after !== undefined) r.after();
    })
  })
}