import express from "express";

import webpack from "webpack";
import webpackDevMiddlewareFn from "webpack-dev-middleware";
import webpackHotMiddlewareFn from "webpack-hot-middleware";
import webpackHotServerMiddlewareFn from "webpack-hot-server-middleware";

import clientConfig from "../../config/webpack/client";
import serverConfig from "../../config/webpack/server";

const expressStaticGzip = require("express-static-gzip");

const isProd = process.env.NODE_ENV === "production";
const port = process.env.PORT || 8080;
const app = express();

if (!isProd) {
  const compiler = webpack([clientConfig, serverConfig]);
  const [clientCompiler, _serverCompiler] = compiler.compilers;
  const webpackDevMiddleware = webpackDevMiddlewareFn(compiler, {
    publicPath: clientConfig.devServer?.publicPath || "/",
    serverSideRender: true,
  });
  const webpackHotMiddleware = webpackHotMiddlewareFn(clientCompiler);

  app.use(webpackDevMiddleware);
  // should be berfore static after dev middleware, in clientConfig needs devServer hot true option
  app.use(webpackHotMiddleware);
  app.use(webpackHotServerMiddlewareFn(compiler));
} else {
  app.use(
    expressStaticGzip("dist", {
      enableBrotli: true,
      orderPreference: ["br"],
    })
  );
  const render = require("./render").default;

  app.get("*", render());
}

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
