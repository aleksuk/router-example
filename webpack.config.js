const webpack = require('webpack');
const path = require('path');

const BUILD_DIR = path.resolve(__dirname, 'public');
const APP_DIR = path.resolve(__dirname, 'src');

const mode = process.env.NODE_ENV || 'development';

const config = {
  mode,
  context: APP_DIR,
  entry: './index.js',
  devtool: 'source-map',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    rules : [
      {
        test : /\.jsx?/,
        include : [APP_DIR],
        use : 'babel-loader'
      }
    ]
  }
};

module.exports = config;
