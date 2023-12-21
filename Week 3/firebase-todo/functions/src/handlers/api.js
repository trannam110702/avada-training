const Koa = require("koa");
const cors = require("@koa/cors");
const koaBody = require("koa-body");
const routes = require("../routes/routes");

const app = new Koa();

app.use(cors());
// app.use(koaBody({ parsedMethods: ["GET", "POST", "PUT", "PATCH", "DELETE"] }));
app.use(routes.routes());
app.use(routes.allowedMethods());

module.exports = app;
