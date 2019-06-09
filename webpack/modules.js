const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const rules = [
  {
    test: /\.html$/,
    use: 'html-loader',
  },
  {
    test: /\.css$/,
    use: [
      production ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader',
    ],
  },
  {
    test: /\.scss$/,
    use: [
      production ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader',
      'sass-loader',
    ],
  },
  {
    test: /\.sass$/,
    use: [
      production ? MiniCssExtractPlugin.loader : 'style-loader',
      'css-loader',
      'sass-loader?indentedSyntax',
    ],
  },
  {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    options: {
      presets: ['@babel/preset-env'],
    },
  },
  {
    test: /\.(gif|png|jpe?g|svg)$/,
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
          jpeg: {
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
      extractCSS: production,
      loaders: {
        sass: [
          'vue-style-loader',
          'css-loader',
          'sass-loader?indentedSyntax',
        ],
      },
    },
  },
];

module.exports = {
  rules,
};
