const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "portal",
    projectName: "utils",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader",
        },
      ],
    },
    plugins: [
      // make sure to include the plugin!
      new VueLoaderPlugin(),
    ],
  });
};
