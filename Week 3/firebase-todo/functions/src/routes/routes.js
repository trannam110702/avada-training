const Router = require("koa-router");
const todoController = require("../controllers/todos/todoController");
const {
  todoInputMiddleware,
  todoInputUpdateMiddleware,
} = require("../middleware/todoInputMiddleware");

const router = new Router({
  prefix: "/api",
});

router.get("/todoes", todoController.getTodos);
router.post("/todoes", todoController.save);
router.put("/todo/:id", todoController.update);
router.put("/todoes", todoController.updateManyTodoes);
router.delete("/todo/:id", todoController.deleteOneTodo);
router.delete("/todoes", todoController.deleteManyTodoes);

module.exports = router;
