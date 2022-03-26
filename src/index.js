import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Ways from "./Ways";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Ways />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
