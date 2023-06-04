const path = require('path');

module.exports = {
  target: 'node',
  mode: 'development',
  entry: './src/server/index.js',
  resolve: {
    alias: {  
      src: path.resolve(__dirname, 'src')
    }
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.bundle.js'
  },
  devtool: 'eval',
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      }
    ]
  }
};
