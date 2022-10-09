import React from "react";
import ReactDOM from "react-dom";
import AppLocal from "./App_Local";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.Fragment>
    <AppLocal />
    {/* <App /> */}
  </React.Fragment>,
  rootElement
);
