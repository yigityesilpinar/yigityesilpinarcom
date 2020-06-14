import path from "path";
import webpack from "webpack";
import nodeExternals from "webpack-node-externals";

import { OUTPUT_DIR, SERVER_ENTRY_PATH, PROJECT_ROOT_DIR } from "../paths";

const mode =
  process.env.NODE_ENV === "development" ? "development" : "production";

const serverConfig: webpack.Configuration = {
  entry: SERVER_ENTRY_PATH,
  mode,
  target: "node",
  externals: [nodeExternals()],
  output: {
    path: path.join(OUTPUT_DIR, "server"),
    filename: "index.js",
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
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
};

export default serverConfig;
