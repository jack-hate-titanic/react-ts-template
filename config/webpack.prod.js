/*
 * @Author: your name
 * @Date: 2021-10-01 11:03:46
 * @LastEditTime: 2021-10-01 16:19:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-ts-template/config/webpack.prod.js
 */
const { merge } = require("webpack-merge");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const common = require("./webpack.common");

module.exports = merge(common, {
  mode: "production",
  plugins: [new CleanWebpackPlugin()],
});
