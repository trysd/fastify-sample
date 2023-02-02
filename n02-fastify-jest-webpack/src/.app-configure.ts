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
