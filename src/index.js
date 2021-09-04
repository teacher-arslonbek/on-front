import React from "react";
import ReactDOM from "react-dom";
import Counters from "./components/counters";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Counters />
  </React.StrictMode>,
  document.getElementById("root")
);
