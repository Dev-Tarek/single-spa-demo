const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  configureWebpack: {
    output: {
      libraryTarget: 'system',
      filename: 'vue-app-1.js',
    },
    devServer: {
      port: 9002,
    },
    watchOptions: {
      ignored: /node_modules/,
      poll: 1000,
    },
    externals: ['vue', 'vuex', 'vue-router', /^@portal\/.+/],
  },
})
