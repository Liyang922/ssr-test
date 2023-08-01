// const Koa = require("koa");
// const koaStatic = require("koa-static");
// const Router = require("koa-router");
import Koa from "koa";
import koaStatic from "koa-static";
import Router from "koa-router";
import render from "./renderer";

const app = new Koa();
const router = new Router();

app.use(koaStatic("public"));

router.get('/', (ctx, next) => {
  ctx.body = render(ctx);
});
app.use(router.routes());

app.listen(8000, () => {
  console.log("server is running at 8000");
});
