/*
 * @Author: your name
 * @Date: 2021-09-17 08:35:25
 * @LastEditTime: 2021-10-01 22:39:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /react-ts-template/src/app.ts
 */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

if (module && module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.querySelector("#root"));
