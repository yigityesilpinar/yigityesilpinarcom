import webpack from 'webpack'
import webpackDevServer from 'webpack-dev-server'
import path from 'path'

const MinifyPlugin = require('babel-minify-webpack-plugin')
const CompressionPlugin = require('compression-webpack-plugin')
const BrotliPlugin = require('brotli-webpack-plugin')
const LoadablePlugin = require('@loadable/webpack-plugin')

import { OUTPUT_DIR, SRC_PATH, PROJECT_ROOT_DIR } from '../paths'

const publicPath = '/'

const mode =
  process.env.NODE_ENV === 'development' ? 'development' : 'production'

const isDevMode = mode === 'development'

const clientConfig: webpack.Configuration & webpackDevServer.Configuration = {
  name: 'client',
  entry: {
    vendors: ['react', 'react-dom', 'styled-components'],
    main: [
      isDevMode && 'webpack-hot-middleware/client',
      path.resolve(SRC_PATH, 'index.tsx'),
    ].filter(Boolean) as string[],
  },
  mode,
  ...(isDevMode ? { devtool: 'source-map' } : {}),
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['node_modules'],
    alias: {
      src: path.resolve(PROJECT_ROOT_DIR, 'src'),
    },
  },
  output: {
    path: OUTPUT_DIR,
    publicPath,
    chunkFilename: '[name]-bundle.js',
    filename: '[name]-bundle.js',
  },
  ...(isDevMode
    ? {
        devServer: {
          contentBase: OUTPUT_DIR,
          overlay: true,
          stats: { colors: true },
          publicPath,
          hot: true,
          hotOnly: true,
        },
      }
    : {}),
  plugins: [
    isDevMode && new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(mode),
    }),
    !isDevMode && new CompressionPlugin(),
    !isDevMode && new BrotliPlugin(),
    !isDevMode && new MinifyPlugin(),
    new LoadablePlugin({ writeToDisk: true }),
  ].filter(Boolean),
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'defaultVendors',
          chunks: 'initial',
          minChunks: 2,
        },
      },
    },
  },
}

export default clientConfig
