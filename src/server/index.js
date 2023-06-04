const Koa = require("koa");
const app = new Koa();
import Home from "src/containers/Home";
import { renderToString } from "react-dom/server";

app.use(async (ctx) => {
  const html = renderToString(<Home />);
  ctx.body = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>React SSR</title>
        </head>
        <body>
          <div id="root">${html}</div>
        </body>
    </html>`;
});

app.listen(3000);
