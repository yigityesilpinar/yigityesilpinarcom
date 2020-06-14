import webpack from "webpack";
import webpackDevServer from "webpack-dev-server";
import HTMLWebpackPlugin from "html-webpack-plugin";
import path from "path";

const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

import { OUTPUT_DIR, SRC_PATH, PROJECT_ROOT_DIR } from "../paths";

const mode =
  process.env.NODE_ENV === "development" ? "development" : "production";

const isDevMode = mode === "development";

const clientConfig: webpack.Configuration & webpackDevServer.Configuration = {
  entry: [
    isDevMode && "webpack-hot-middleware/client",
    path.resolve(SRC_PATH, "index.tsx"),
  ].filter(Boolean),
  mode,
  ...(isDevMode ? { devtool: "source-map" } : {}),
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
            options: {
              // While type check is done in separate process, thanks to ForkTsCheckerWebpackPlugin plugin.
              transpileOnly: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/,
        use: [{ loader: "html-loader" }],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
    modules: ["node_modules"],
    alias: {
      src: path.resolve(PROJECT_ROOT_DIR, "src"),
    },
  },
  output: {
    path: OUTPUT_DIR,
    publicPath: "/",
    filename: "bundle.js",
  },
  devServer: {
    contentBase: OUTPUT_DIR,
    overlay: true,
    stats: { colors: true },
    publicPath: "/",
    hot: true,
    hotOnly: true,
  },
  plugins: [
    isDevMode && new webpack.HotModuleReplacementPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(SRC_PATH, "index.html"),
    }),
  ].filter(Boolean),
};

export default clientConfig;
