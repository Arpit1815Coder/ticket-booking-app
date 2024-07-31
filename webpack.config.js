const path = require('path');
const webpack = require('webpack');

module.exports = {
  // Your existing configuration
  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify"),
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
};
