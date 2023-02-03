/**
 * Here the configuration of the app is written.
 * It is also possible to add a staging mode.
 * By writing in Typescript, it offers an efficient and simple way to resolve types in real-time.
 * 
 * Although there is a Fastify config as an alternative solution, in this project we are building
 * it with a policy of minimizing dependence on the framework as much as possible.
 */
const configures = {
  prod: {
    mode: "prod",
    baseAPIPath: "/test/v1"
  },
  dev: {
    mode: "dev",
    baseAPIPath: "/test/v1"
  }
}
export const conf = configures[process.argv.length > 2 && process.argv[2] == 'dev'
  ? 'dev'
  : 'prod'];
