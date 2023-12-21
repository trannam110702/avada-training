const Koa = require("koa");
const routes = require("../routes/routes.js");
const koaBody = require("koa-body");

const app = new Koa();
app.use(koaBody());
app.use(routes.routes());
app.use(routes.allowedMethods());

module.exports = app;
