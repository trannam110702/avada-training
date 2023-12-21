const Router = require("koa-router");
const { hello } = require("../handlers/controllers/helloController");

const router = new Router({
  prefix: "/api",
});

// Routes will go here
router.get("/", hello);
router.get("/hello", hello);

module.exports = router;
