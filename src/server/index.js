const Koa = require("koa");
const app = new Koa();
import Home from "src/containers/Home";
// 使用jsx语法必须引入React
import React from "react";
import { renderToString } from "react-dom/server";
const koaStatic = require("koa-static");

// koa static
app.use(koaStatic("public"));

app.use(async (ctx) => {
  // <Home />而不是Home
  const html = renderToString(<Home />); // 不会处理事件
  ctx.body = `
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
});

app.listen(8000);
