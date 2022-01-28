const path = require('path')
const webpack = require('webpack')

const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const IS_DEVELOPMENT = process.env.NODE_ENV === 'dev'

const appDirectory = path.join(__dirname, 'app')
const stylesDirectory = path.join(__dirname, 'styles')
const assetsDirectory = path.join(__dirname, 'shared')
const node_modules = 'node_modules'

module.exports = {
  entry: [
    path.join(appDirectory, 'index.js'),
    path.join(stylesDirectory, 'index.scss'),
  ],

  resolve: {
    modules: [appDirectory, stylesDirectory, assetsDirectory, node_modules],
  },

  plugins: [
      new webpack.DefinePlugin(IS_DEVELOPMENT),
      new CopyWebpackPlugin({
          patterns: [
              {from: './shared', to: './'}
          ]
      })

    ],
}
