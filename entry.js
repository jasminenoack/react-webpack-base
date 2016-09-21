// css
require("./style.css")

// imports
import Content from "./content.js";
import React from "react";
import ReactDom from "react-dom";

ReactDom.render(
    <Content/>,
    document.getElementById("content")
)
