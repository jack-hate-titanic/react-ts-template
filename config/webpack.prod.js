/*
 * @Author: your name
 * @Date: 2021-10-01 11:03:46
 * @LastEditTime: 2021-10-01 22:38:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-ts-template/config/webpack.prod.js
 */
const { merge } = require("webpack-merge");
const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          context: path.join(__dirname, "../public"),
          from: "*",
          to: path.join(__dirname, "../dist"),
          toType: "dir",
        },
      ],
    }),
  ],
});
