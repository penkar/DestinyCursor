var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    'bundle.js':'./js/index.js',
  },
  output: {
    path: __dirname,
    filename: './dist/[name]'
  },
  module: {
    rules: [{
      test: /\.jpg$/,
      use: ["file-loader"]
    },{
      test: /\.scss$/,
      use: ["style-loader", "css-loader", "sass-loader"]
    },{
      test:/\.ttf/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'url-loader'
      }
    },{
      test: /\.html$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'html-loader'
      }
    },{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader'
      }
    }]
  },
  watch: true,
  devtool: 'source-map',
  mode: 'development'
}