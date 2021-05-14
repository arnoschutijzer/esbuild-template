import dom from "react-dom";
import React from "react";

import "./app.scss";

import makeHeadLine from "./headline-maker";

dom.render(
  <p>{makeHeadLine("hello world")}</p>,
  document.getElementById("root")
);
