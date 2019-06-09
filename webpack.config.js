'use strict';

let path = require('path');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'main.js',
    path: __dirname + '/dist/js'
  },
  watch: true,
  devtool: "source-map"
};


// module.exports = {
//   optimization: {
//     minimizer: [new UglifyJsPlugin()],
//   },
// };