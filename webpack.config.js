const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const rules = [
  {
    test: /\.scss$/,
    use: ExtractTextPlugin.extract(
      {
        fallback: 'style-loader',
        use: [
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      }
    )
  }
];

const plugins = [
  new ExtractTextPlugin('studies.css')
];

module.exports = {
  entry: {
    studies: './src/studies.scss'
  },
  output: {
    filename: '[name].css',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules
  },
  plugins
}
