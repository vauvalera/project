const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const AsyncChunkNames = require('webpack-async-chunk-names-plugin');

const base = [
  new VueLoaderPlugin(),
  new HtmlWebpackPlugin({
    template: './src/index.html',
  }),
];


const build = [
  new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
  }),
  new AsyncChunkNames(),
];


module.exports = (production) ? [...base, ...build] : base;
