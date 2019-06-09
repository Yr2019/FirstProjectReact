'use strict';

let path = require('path');
//const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './Lessons/Lesson2/Lesson/src/js/index.js',
  output: {
    filename: 'main.js',
    path: __dirname + './Lessons/Lesson2/Lesson/dist/js',
    publicPath: './Lessons/Lesson2/Lesson/dist/js'
  },
  watch: true,
  devtool: "source-map",
  devServer: {
    overlay: true,
    contentBase: path.join(__dirname, './Lessons/Lesson2/Lesson/dist/'),
    compress: true,
    port: 9000
  }
};


// module.exports = {
//   optimization: {
//     minimizer: [new UglifyJsPlugin()],
//   },
// };