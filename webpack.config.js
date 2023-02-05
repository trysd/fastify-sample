const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  // devtool: "source-map",

  mode: 'production',
  optimization: {
    usedExports: true,
  },
  
  // To "obfuscate," comment out the following.
  optimization: {
    minimize: false
  },
  
  target: 'node',
  externals: ({context, request}, callback) => {
    if (request === 'fastify') return callback(null, 'commonjs ' + request);
    callback();
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
    modules: ["node_modules"]
  }
};