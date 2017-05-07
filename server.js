const express = require('express')
const fs = require('fs')
const { createBundleRenderer } = require('vue-server-renderer')

const template = fs.readFileSync('./src/index.template.html', 'utf-8')
const serverBundle = require('./dist/vue-ssr-server-bundle.json')
const clientManifest = require('./dist/vue-ssr-client-manifest.json')

const renderer = createBundleRenderer(serverBundle, {
  runInNewContext: false,
  template,
  clientManifest
})

const context = {
  title: 'Vue SSR minimum example'
}

const server = express()

server.get('*', (req, res) => {
  renderer.renderToString(context, (err, html) => {
    res.end(html)
  })
})

server.listen(8080)
