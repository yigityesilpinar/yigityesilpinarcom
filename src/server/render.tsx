import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { clearChunks, flushChunkNames } from 'react-universal-component/server'
import flushChunks from 'webpack-flush-chunks'
import { Request, Response } from 'express'
import { StaticRouter } from 'react-router'
import { Stats } from 'webpack'

import Routes from '../routes'

const render = (webpackStats: Stats) => (req: Request, res: Response) => {
  const sheet = new ServerStyleSheet()
  let appStr = ''
  let styleTags = ''
  // let js = `
  // <script src="vendors-bundle.js"></script>
  // <script src="main-bundle.js"></script>
  // `
  try {
    appStr = renderToString(
      sheet.collectStyles(
        <StaticRouter location={req.url}>
          <Routes />
        </StaticRouter>
      )
    )
    styleTags = sheet.getStyleTags()
  } catch (error) {
    // handle error
    // sentry
    // eslint-disable-next-line no-console
    console.error(error)
    return res.status(500).send('500 error')
  } finally {
    sheet.seal()
  }
  clearChunks()
  const { js } = flushChunks(
    process.env.NODE_ENV === 'development'
      ? (webpackStats as any).clientStats
      : webpackStats,
    {
      chunkNames: flushChunkNames(),
    }
  )
  appStr = renderToString(
    <StaticRouter location={req.url}>
      <Routes />
    </StaticRouter>
  )
  res.send(`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      ${styleTags}
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <title>Yigit Yesilpinar Personal Page</title>
    </head>
    <body>
      <div id="root">${appStr}</div>
      <noscript>
        You need to enable JavaScript to run this app.
      </noscript>
      ${js}
    </body>
  </html>
`)
}

export default render
