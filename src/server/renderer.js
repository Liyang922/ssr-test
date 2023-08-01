// 使用jsx语法必须引入React
import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import router from "src/router";

const render = (ctx) => {
  const html = renderToString(
    <StaticRouter location={ctx.req.url}>
      {renderRoutes(router)}
    </StaticRouter>
  );

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>React SSR</title>
        </head>
        <body>
          <div id="root">${html}</div>                                              
          <script src="client.bundle.js"></script>
        </body>
    </html>`;
};

export default render;