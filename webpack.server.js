const path = require('path');
const nodeExternals = require('webpack-node-externals');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: {
    server: './src/server/index.js'
  },
  resolve: {
    alias: {  
      src: path.resolve(__dirname, 'src')
    }
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js'
  },
  devtool: 'eval',
  externals: [nodeExternals()],
};

module.exports = merge(baseConfig, serverConfig);
