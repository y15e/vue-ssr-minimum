const path = require('path')

const config = {
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      { test: /\.vue$/, loader: 'vue-loader' }
    ]
  }
}

module.exports = config
