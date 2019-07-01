## vue-ssr-minimum

This is a minimum example of Vue.js SSR (Server Side Rendering) without using Nuxt.js. The code is based on [Vue.js Server-Side Rendering Guide](https://ssr.vuejs.org/) and [HackerNews clone built with Vue 2.0](https://github.com/vuejs/vue-hackernews-2.0).

## How to use

```
$ git clone https://github.com/y15e/vue-ssr-minimum.git
$ cd vue-ssr-minimum
$ npm install
$ webpack --config webpack.client.config.js
$ webpack --config webpack.server.config.js
$ node server.js
```
Open http://localhost:8080/ with browser.
