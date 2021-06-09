import ReactDOM from "react-dom";
import React from "react";

import "./app.scss";

import makeHeadLine from "./headline-maker";

ReactDOM.render(
  <p>{makeHeadLine("hello world")}</p>,
  document.getElementById("root")
);
