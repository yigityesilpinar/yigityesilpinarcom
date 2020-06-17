import express from 'express'
import * as Sentry from '@sentry/node'

const expressStaticGzip = require('express-static-gzip')

const isProd = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 8080
const app = express()

if (!isProd) {
  const webpack = require('webpack')
  const webpackDevMiddlewareFn = require('webpack-dev-middleware')
  const webpackHotMiddlewareFn = require('webpack-hot-middleware')
  const webpackHotServerMiddlewareFn = require('webpack-hot-server-middleware')
  const clientConfig = require('../../config/webpack/client').default
  const serverConfig = require('../../config/webpack/server').default
  const compiler = webpack([clientConfig, serverConfig])
  const [clientCompiler, _serverCompiler] = compiler.compilers
  const webpackDevMiddleware = webpackDevMiddlewareFn(compiler, {
    publicPath: clientConfig.devServer?.publicPath || '/',
    serverSideRender: true,
  })
  const webpackHotMiddleware = webpackHotMiddlewareFn(clientCompiler)

  app.use(webpackDevMiddleware)
  // should be berfore static after dev middleware, in clientConfig needs devServer hot true option
  app.use(webpackHotMiddleware)
  app.use(webpackHotServerMiddlewareFn(compiler))
} else {
  const webpackStats = require('../../build/stats.json')
  Sentry.init({
    dsn: process.env.SENTRY_DSN,
  })
  app.use(Sentry.Handlers.requestHandler())
  app.use(Sentry.Handlers.errorHandler())
  app.use(
    expressStaticGzip('build', {
      enableBrotli: true,
      orderPreference: ['br'],
    })
  )
  const render = require('./render').default
  //! this requires server build to be after client (not paralel)
  app.get('*', render(webpackStats))
}

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on http://localhost:${port}`)
})
