// require('babel-polyfill');

var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: './js/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.OldWatchingPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
        exclude: /node_modules/
      },
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-0', 'react']
        }
      }
    ]
  },
  watch: true
};
