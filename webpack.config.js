// webpack config

const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});
const json = require('./static/data/app.json', './static/data/recipes.json');

const output = path.resolve(__dirname + '/dist/');

module.exports = {
  entry: './src/js/index.js',
  output: {
    path: output,
    filename: 'js/index.bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.scss$/, use: ExtractTextPlugin.extract({
        use: [{
          loader: 'css-loader',
        },
        {
          loader: 'sass-loader'
        }]
      })
    }]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin({
      filename: 'css/main.css',
      disable: false,
      allChunks: true
    })
  ]
}