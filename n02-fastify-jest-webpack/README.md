# fastify + webpack, sample for backend

This is a sample code for nodejs + fastify customized for the back-end. By bundling with webpack, it reduces the load for uploading to the cloud and binding to container systems.

## Usage

### for production

Create a bundle file at dist/index.js

```js
$ npm run build
```

### for developer

Start hot reloading using ts-node-dev.

```js
$ npm run dev
```