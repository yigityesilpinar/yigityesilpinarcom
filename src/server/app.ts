import express from "express";

const expressStaticGzip = require("express-static-gzip");

const isProd = process.env.NODE_ENV === "production";
const port = process.env.PORT || 8080;
const app = express();

if (!isProd) {
  const webpack = require("webpack");
  const webpackDevMiddlewareFn = require("webpack-dev-middleware");
  const webpackHotMiddlewareFn = require("webpack-hot-middleware");
  const clientConfig = require("../../config/webpack/client").default;
  const compiler = webpack(clientConfig);
  const webpackDevMiddleware = webpackDevMiddlewareFn(compiler, {
    publicPath: clientConfig.output.publicPath,
  });
  const webpackHotMiddleware = webpackHotMiddlewareFn(compiler);

  app.use(webpackDevMiddleware);
  // should be berfore static after dev middleware, in clientConfig needs devServer hot true option
  app.use(webpackHotMiddleware);
  app.use(express.static("dist"));
} else {
  app.use(
    expressStaticGzip("dist", {
      enableBrotli: true,
      orderPreference: ["br"],
    })
  );
}

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
