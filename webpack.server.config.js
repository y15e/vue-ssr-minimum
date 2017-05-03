const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.config')
const nodeExternals = require('webpack-node-externals')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

const config = merge(baseConfig, {
  entry: './src/entry-server.js',
  target: 'node',
  output: {
    libraryTarget: 'commonjs2'
  },
  externals: nodeExternals({
    whiltelist: /\.css$/
  }),
  plugins: [
    new VueSSRServerPlugin()
  ]
})

module.exports = config
