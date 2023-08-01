import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import router from "src/router";

const rootElement = document.getElementById("root");


const App = () => {
  return (
    <BrowserRouter>
      {renderRoutes(router)}
    </BrowserRouter>
  );
}

ReactDom.hydrate(<App />, rootElement);