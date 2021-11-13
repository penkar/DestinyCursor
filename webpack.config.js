const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  context: __dirname,
  entry: {
    'bundle.js': './js/index.js',
  },
  output: {
    path: __dirname,
    filename: './dist/[name]'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'dist/[name].css',
      chunkFilename: 'dist/[id].css'
    })
  ],
  module: {
    rules: [{
      test: /\.jpg$/,
      loader: [{
        loader: 'file-loader',
        options: {
          name: './dist/[name].[ext]'
        }
      }]
    },{
      test:/\.ttf/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'url-loader'
      }
    },{
      test: /\.html$/,
      exclude: /(node_modules|bower_components)/,
      use: ['html-loader']
    },{
      test: /\.js/,
      exclude: /(node_modules|bower_components)/,
      use: ['babel-loader']
    },{
      test: /\.module\.s(a|c)ss$/,
      loader: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            modules: true,
            sourceMap: true
          }
        },{
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    },{
      test: /\.s(a|c)ss$/,
      exclude: /\.module.(s(a|c)ss)$/,
      loader: [
        MiniCssExtractPlugin.loader,
        'css-loader',{
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ]
    }]
  },
  watch: true,
  devtool: 'source-map',
  mode: 'development'
}
