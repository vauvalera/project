// const path = require('path');
// const distPath = path.join(__dirname, '../../local/vue/dist/src');
// const proxy = require('../config/proxytable');

const base = {};

const dev = {
  // contentBase: path.join(__dirname, '../dist/'),
  historyApiFallback: true,
  // proxy,
  port: 8080,
  compress: true,
  open: true,
  hot: true,
  stats: {
    normal: true,
  },
};

module.exports = production ? base : dev;
