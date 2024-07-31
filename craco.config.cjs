const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.resolve.fallback = {
        crypto: require.resolve('crypto-browserify'),
        stream: require.resolve('stream-browserify'),  
        buffer: require.resolve('buffer/'),
        url: require.resolve('url/'),
        process: require.resolve('process/browser'),
        util: require.resolve('util/'),
      };

      webpackConfig.plugins = [
        ...(webpackConfig.plugins || []),
        new NodePolyfillPlugin(),
      ];

      return webpackConfig;
    },
  },
};
