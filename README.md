# fastify + webpack example

This is a sample code for nodejs + fastify customized for the back-end. By bundling with webpack, it reduces the load for uploading to the cloud and binding to container systems.

## Usage

### production

Create a bundle file at dist/index.js

```js
$ npm run build
$ node dist/index.js
```
or

```js
$ npm run bar
```

### developer

Start hot reloading using ts-node-dev.

```js
$ npm run dev
```

### test

building tests with Jest.

```js
$ npm run test
```

## host name

The implementation has been set to specify the host as 0.0.0.0, depending on the environment. If the first argument at run time is given as 'dev', it will become 127.0.0.1. If modification is necessary, change src/index.ts.
