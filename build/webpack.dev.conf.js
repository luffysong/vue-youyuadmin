var fs = require('fs');
var path = require('path');
var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var StyleLintPlugin = require('stylelint-webpack-plugin')

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

const manifestPath = path.resolve(config.dev.dllPath, 'lib.json')

if (!fs.existsSync(manifestPath)) {
  console.error('The DLL manifest is missing. Please run `yarn run dll`');
  process.exit(0);
}

module.exports = merge(baseWebpackConfig, {
  module: {
    loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
  },
  // eval-source-map is faster for development
  devtool: '#eval-source-map',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': config.dev.env
    }),
    // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    // https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new StyleLintPlugin({
      configFile: path.resolve(__dirname, '../.stylelintrc.js'),
      context: 'inherits from webpack',
      files: '../src/**/*.@(?(l)?(e|c)ss|vue|html)',
      failOnError: false,
      extractStyleTagsFromHtml: true,
    }),
    new webpack.DllReferencePlugin({
        context: process.cwd(),
        manifest: require(manifestPath),
    }),
  ]
})
