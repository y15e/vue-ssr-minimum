# vue-ssr-minimum
This is a minimum example of vue server side rendering.

[HackerNews clone built with Vue 2.0](https://github.com/vuejs/vue-hackernews-2.0) is a great example with many features but it was a little bit difficult for me to understand these features at once.
I hope this example will help vuejs beginners like me.

# How to use
```
git clone https://github.com/d6er/vue-ssr-minimum.git
cd vue-ssr-minimum
npm install
webpack --config webpack.client.config.js
webpack --config webpack.server.config.js
node server.js
```
Open http://localhost:8080/ with browser.
