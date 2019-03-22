const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const distPath = path.join(__dirname, '/public');

const isProduction = function () {
  return (process.env.NODE_ENV !== 'development');
};

module.exports = {
  entry: ['babel-polyfill', './src/main.js'],
  output: {
    filename: 'bundle.js',
    path: distPath,
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: 'html-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          // isProduction() ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            // options: {
            //   minimize: isProduction(),
            // },
          },
          'sass-loader',
          'resolve-url-loader',
        ],
      },
      {
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
        ],
      },
      {
        test: /\.sass$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax',
        ],
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        exclude: /fonts/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name][hash].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 70,
              },
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: 'fonts/[name][hash].[ext]',
          },
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          extractCSS: isProduction(),
          loaders: {
            sass: [
              'vue-style-loader',
              'css-loader',
              'sass-loader?indentedSyntax',
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CleanWebpackPlugin(),
  ],
  devServer: {
    contentBase: distPath,
    port: 9000,
    compress: true,
    open: true,
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'src')],
    extensions: ['*', '.js', '.vue', '.css'],
  },
};
