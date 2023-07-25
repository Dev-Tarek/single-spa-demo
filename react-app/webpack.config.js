const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "portal",
    projectName: "react",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    output: {
      libraryTarget: 'system',
      filename: 'react-app.js',
    },
    devServer: {
      port: 9002,
    },
    watchOptions: {
      ignored: /node_modules/,
      poll: 1000,
    },
    externals: [/^@portal\/.+/]
  });
};
