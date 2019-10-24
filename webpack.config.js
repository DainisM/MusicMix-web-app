var path = require("path");

var DIST_DIR = path.resolve(__dirname, "dist");
var SRC_DIR = path.resolve(__dirname, "src");

var config = {
  entry: SRC_DIR + "/app/index.js",
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    publicPath: "/app"
  },
  devServer: {
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
          presets: ["@babel/env", "@babel/react"],
          plugins: ["@babel/plugin-proposal-class-properties"]
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(png|jpg)$/, loader: "url-loader?limit=8192" }
    ]
  }
};

module.exports = config;
