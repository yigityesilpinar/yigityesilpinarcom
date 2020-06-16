import express from 'express'

const expressStaticGzip = require('express-static-gzip')

const isProd = process.env.NODE_ENV === 'production'
const port = process.env.PORT || 8080
const app = express()

app.use(require('body-parser'))

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
  app.use(
    expressStaticGzip('dist', {
      enableBrotli: true,
      orderPreference: ['br'],
    })
  )
  const render = require('./render').default

  app.get('*', render())
}

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is listening on http://localhost:${port}`)
})
