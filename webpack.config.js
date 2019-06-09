const path = require('path');

global.production = process.env.NODE_ENV !== 'development';

const distPath = path.join(__dirname, production ? '/public' : '/dist/');
const publicPath = production ? path.join(__dirname, 'public/') : '/';
const modules = require('./src/webpack/modules');
const plugins = require('./src/webpack/plugins');
const server = require('./src/webpack/server');
const optimization = require('./src/webpack/optimization');

module.exports = {
  mode: 'development',
  entry: [
    'babel-polyfill',
    './src/main.js',
  ],
  output: {
    publicPath,
    chunkFilename: '[name].js',
    filename: 'app.js',
    path: distPath,
  },
  module: modules,
  plugins,
  optimization,
  devServer: server,
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['*', '.js', '.vue', '.css', '.json'],
  },
  devtool: production ? 'source-map' : 'cheap-module-eval-source-map',
};
