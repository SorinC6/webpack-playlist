const path = require("path");

const entryPoint = "src/script-1.js";
const outputPoint = "dist";

module.exports = {
  mode: "development",
  //define entry point
  entry: path.resolve(__dirname, entryPoint),

  //define output
  output: {
    path: path.resolve(__dirname, outputPoint),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.(css|scss)$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  }
};
