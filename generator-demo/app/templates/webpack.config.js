var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var TransferWebpackPlugin = require('transfer-webpack-plugin');
var WebpackDevServer = require('webpack-dev-server');


var webpackConfig = {
  entry: ['./src/main.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js/,
        exclude: /node_modules/
      },
      {
        test: /\.(css|less)/,
        loader: ExtractTextPlugin.extract('style', 'css!less'),
        exclude: /node_modules/
      },
      {
        loader:  'url-loader?limit=50000&name=images/[name].[ext]',
        test: /\.(jpe?g|png|gif|wav)/
      },
      {
        test: require.resolve('jquery'),
        loader: 'expose?jQuery!expose?$'
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['', '.js', '.vue', '.less']
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('main.css')
  ]
};

module.exports = webpackConfig;