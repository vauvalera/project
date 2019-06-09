const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const dev = {
  runtimeChunk: 'single',
  splitChunks: {
    chunks: 'all',
  },
};

const build = {
  minimizer: [
    new TerserPlugin({
      cache: true,
      parallel: true,
      sourceMap: true,
    }),
    new OptimizeCSSAssetsPlugin({
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }],
      },
    }),
  ],
  splitChunks: {
    chunks: 'async',
    minSize: 30000,
    minChunks: 1,
    maxAsyncRequests: 5,
    maxInitialRequests: 3,
    name: true,
    cacheGroups: {
      vendor: {
        name: 'vendor',
        chunks: 'all',
        test: /[\\/]node_modules[\\/]/,
        priority: -20,
      },
      default: {
        minChunks: 2,
        priority: -10,
        reuseExistingChunk: true,
      },
    },
  },
};

module.exports = production ? build : dev;
