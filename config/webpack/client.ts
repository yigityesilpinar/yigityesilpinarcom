import webpack, { Configuration, WebpackPluginInstance } from 'webpack'
import path from 'path'

import CompressionPlugin from 'compression-webpack-plugin'
import BrotliPlugin from 'brotli-webpack-plugin'
import LoadablePlugin from '@loadable/webpack-plugin'

import { OUTPUT_DIR, SRC_PATH, PROJECT_ROOT_DIR } from '../paths'

const publicPath = '/'

const isDevelopment = process.env.NODE_ENV === 'development'

const clientConfig: Configuration = {
  name: 'client',
  entry: {
    vendors: ['react', 'react-dom', 'styled-components'],
    main: [isDevelopment && 'webpack-hot-middleware/client', path.resolve(SRC_PATH, 'index.tsx')].filter(
      Boolean
    ) as string[]
  },
  mode: isDevelopment ? 'development' : 'production',
  ...(isDevelopment ? { devtool: 'source-map' } : {}),
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.html$/,
        use: [{ loader: 'html-loader' }]
      },
      // Images
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'media/[name].[ext]'
            }
          }
        ]
      },
      // Fonts
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              mimetype: 'application/font-woff',
              name: 'media/[name].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 8192,
              name: 'media/[name].[ext]'
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    modules: ['node_modules'],
    alias: {
      src: path.resolve(PROJECT_ROOT_DIR, 'src')
    }
  },
  output: {
    path: OUTPUT_DIR,
    publicPath,
    chunkFilename: '[name]-bundle.js',
    filename: '[name]-bundle.js'
  },
  ...(isDevelopment
    ? {
        devServer: {
          static: OUTPUT_DIR,
          hot: true
        }
      }
    : {}),
  plugins: [
    ...(isDevelopment ? [new webpack.HotModuleReplacementPlugin()] : []),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      CLIENT_BUILD: JSON.stringify(true)
    }),
    ...(isDevelopment ? [] : [new CompressionPlugin()]),
    ...(isDevelopment ? [] : [new BrotliPlugin() as unknown as WebpackPluginInstance]),
    new LoadablePlugin({ writeToDisk: true }) as unknown as WebpackPluginInstance
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          name: 'defaultVendors',
          chunks: 'initial',
          minChunks: 2
        }
      }
    }
  }
}

export default clientConfig
