import path from "path";
import express from "express";
import webpack from "webpack";
import webpackDevMiddlewareFn from "webpack-dev-middleware";
import webpackHotMiddlewareFn from "webpack-hot-middleware";
import clientConfig from "../../config/webpack/client";

const compiler = webpack(clientConfig);
const webpackDevMiddleware = webpackDevMiddlewareFn(compiler, {
  publicPath: clientConfig.output.publicPath,
});
const webpackHotMiddleware = webpackHotMiddlewareFn(compiler);
const app = express();

app.use(webpackDevMiddleware);
// should be berfore static after dev middleware, in clientConfig needs devServer hot true option
app.use(webpackHotMiddleware);
app.use(express.static("dist"));

app.listen(8080, () => {
  console.log("Server is listening");
});
