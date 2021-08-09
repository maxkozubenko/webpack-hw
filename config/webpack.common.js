const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PrettierPlugin = require('prettier-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

const paths = require('./paths');

module.exports = {
  // entry: [paths.src + '/main.js'],
  entry: {
    index: [paths.src + '/main.js'],
    another: [paths.src + '/js/secondStage.js'],
  },

  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

  plugins: [
    new CleanWebpackPlugin(),

    new HtmlWebpackPlugin({
      title: 'Webpack config',
      template: paths.src + '/template.pug',
      filename: 'index.html',
      chunks: ['index'],
    }),

    new HtmlWebpackPlugin({
      filename: 'index2.html',
      template: paths.src + '/template2.pug',
      chunks: ['another'],
    }),

    new PrettierPlugin(
        {
          printWidth: 80,
          tabWidth: 2,
          bracketSpacing: false,
          singleQuote: true,
          useTabs: false,
          semi: true,
          encoding: 'utf-8',
          extensions: ['.js', '.ts'],
        }
    ),

    new ESLintPlugin({
      files: ['.', 'src', 'config'],
      formatter: 'table',
    }),
  ],

  module: {
    rules: [
      {test: /\.js$/, use: ['babel-loader']},
      {
        test: /\.pug$/,
        loader: 'pug-loader',
      },
    ],
  },

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.src,
    },
  },
};
