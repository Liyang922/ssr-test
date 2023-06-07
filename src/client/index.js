import React from "react";
import ReactDOM from "react-dom/client";
import Home from "src/containers/Home";

const rootElement = document.getElementById("root");

ReactDOM.hydrateRoot(rootElement, <Home />);