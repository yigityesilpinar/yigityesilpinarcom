import express from "express";
import webpack from "webpack";
import webpackDevMiddlewareFn from "webpack-dev-middleware";
import webpackHotMiddlewareFn from "webpack-hot-middleware";
import clientConfig from "../../config/webpack/client";

const isProd = process.env.NODE_ENV === "production";
const port = process.env.PORT || 8080;
const app = express();

if (!isProd) {
  const compiler = webpack(clientConfig);
  const webpackDevMiddleware = webpackDevMiddlewareFn(compiler, {
    publicPath: clientConfig.output.publicPath,
  });
  const webpackHotMiddleware = webpackHotMiddlewareFn(compiler);

  app.use(webpackDevMiddleware);
  // should be berfore static after dev middleware, in clientConfig needs devServer hot true option
  app.use(webpackHotMiddleware);
}
app.use(express.static("dist"));

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
