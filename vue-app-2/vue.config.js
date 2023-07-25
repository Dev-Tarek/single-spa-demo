const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  configureWebpack: {
    output: {
      libraryTarget: 'system',
      filename: 'vue-app-2.js',
    },
    devServer: {
      port: 9003,
    },
    watchOptions: {
      ignored: /node_modules/,
      poll: 1000,
    },
    externals: ['vue', 'vuex', 'vue-router', /^@portal\/.+/],
  },
})
