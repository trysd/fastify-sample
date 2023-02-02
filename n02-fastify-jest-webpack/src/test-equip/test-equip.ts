import { InjectOptions, LightMyRequestResponse } from 'fastify'

export type ResourceItem = {
  name: string,
  request: InjectOptions,
  response: { [keys: string]: number | string },
  before?: () => void,
  end?: () => void
}

export const tester = (
  requester: (req: InjectOptions) => Promise<LightMyRequestResponse>,
  resourceItem: ResourceItem[]
) => {
  resourceItem.forEach(r => {
    test(r.name, async () => {
      // const response = await app.inject(r.request)
      const response = await requester(r.request)
      Object.keys(r.response).forEach(key => {
        switch (key) {
          case 'statusCode': {
            expect(response.statusCode).toEqual(r.response[key]);
            break
          }
          case 'body': {
            expect(response.body).toEqual(r.response[key]);
            break
          }
        }
      });
    });
  })
}