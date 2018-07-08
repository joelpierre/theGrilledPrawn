const path = require('path');

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      './assets/js/main.js',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'main.bundle.js',
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['env', 'stage-2'],
        },
      }],
  },
};