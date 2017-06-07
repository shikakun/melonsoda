const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    studies: './src/studies.scss'
  },
  output: {
    filename: '[name].css',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(
          {
            fallback: 'style-loader',
            use: ['css-loader', 'sass-loader?outputStyle=expanded']
          }
        )
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('studies.css')
  ]
}
