import webpack from 'webpack'
import path from 'path'

//! crucial for bundling logic
//! e.g react-universal-component ssr is not working without
import externals from './externals'

import { SRC_PATH, PROJECT_ROOT_DIR, OUTPUT_DIR } from '../paths'

const mode =
  process.env.NODE_ENV === 'development' ? 'development' : 'production'

const isDevMode = mode === 'development'

const serverConfig: webpack.Configuration = {
  name: 'server',
  entry: [
    isDevMode
      ? path.resolve(SRC_PATH, 'server/render.tsx')
      : path.resolve(SRC_PATH, 'server/index.ts'),
  ],
  target: 'node',
  externals,
  mode,
  ...(isDevMode ? { devtool: 'source-map' } : {}),
  output: {
    path: OUTPUT_DIR,
    filename: 'server.js',
    ...(isDevMode ? { libraryTarget: 'commonjs2' } : {}),
  },
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
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(mode),
      'process.env.SENTRY_DSN': JSON.stringify(process.env.SENTRY_DSN),
    }),
    //! Critical to keep server bundle chunk together
    //! e.g react-universal-component ssr is not working without
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
}

export default serverConfig
