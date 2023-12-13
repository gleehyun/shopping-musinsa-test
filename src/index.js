import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// json-server(json server npm)
// npm install -g json-server
// Alternative port
// You can start JSON Server on other ports with the --port flag:
// $ json-server --watch db.json --port 3004
// port : 우편번호
