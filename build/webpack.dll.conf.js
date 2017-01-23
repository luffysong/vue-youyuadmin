const webpack = require('webpack');
const path = require('path');
const config = require('../config');

const outputPath = config.dev.dllPath;

const vendors = [
  'element-ui',
  'js-cookie',
  'lodash',
  'moment',
  'vue',
  'vue-nprogress',
  'vue-resource',
  'vue-router',
  'vuex',
  'vuex-router-sync',
];

module.exports = {
  context: process.cwd(),
  entry: {
    'lib': vendors,
  },
  output: {
    filename: '[name].dll.js',
    path: outputPath,
    library: '[name]',
  },
  plugins: [
    new webpack.DllPlugin({
       name: '[name]',
       path: path.join(outputPath, '[name].json'),
    }),
  ],
  performance: {
    hints: false,
  },
};
