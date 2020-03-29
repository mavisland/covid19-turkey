import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./styles/style.scss";

import App from "./components/App";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
