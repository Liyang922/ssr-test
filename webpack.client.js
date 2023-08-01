const path = require('path');
const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const clientConfig = {
  mode: 'development',
  entry: {
    client: './src/client/index.js'
  },
  resolve: {
    alias: {  
      src: path.resolve(__dirname, 'src')
    }
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].bundle.js'
  },
  devtool: 'eval',
};

module.exports = merge(baseConfig, clientConfig);
