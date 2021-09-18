/*
 * @Author: ws
 * @Date: 2021-09-17 08:22:05
 * @LastEditTime: 2021-09-18 22:06:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-ts-template/webpack.config.js
 */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "./src/index.ts"),
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["./dist"],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "src/index.html"),
    }),
  ],
  resolve: {
    extensions: [".ts", ".js", ".json"],
  },
  devServer: {
    static: path.join(__dirname, "dist"),
    compress: false,
    host: "localhost",
    port: 8080,
    open: true,
  },
};
