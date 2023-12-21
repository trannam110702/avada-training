const {
  getAll: getAllTodos,
  add: addTodo,
  deleteOne,
  deleteMany,
  updateMany,
  updateOne: updateTodo,
} = require("../../repositories/todoRepository");

const getTodos = async (ctx) => {
  try {
    const Todos = await getAllTodos();
    ctx.body = {
      data: Todos,
    };
    ctx.status = 200;
  } catch (e) {
    ctx.status = 404;
    ctx.body = {
      success: false,
      data: [],
      error: e.message,
    };
  }
};
const save = async (ctx) => {
  try {
    const postData = ctx.req.body;
    const addRes = await addTodo(postData);
    ctx.status = 201;
    return (ctx.body = {
      success: true,
    });
  } catch (e) {
    return (ctx.body = {
      success: false,
      error: e.message,
    });
  }
};
const deleteOneTodo = async (ctx) => {
  try {
    await deleteOne(ctx.request.params.id);
    ctx.status = 200;
    return (ctx.body = {
      success: true,
    });
  } catch (e) {
    return (ctx.body = {
      success: false,
      error: e.message,
    });
  }
};
const deleteManyTodoes = async (ctx) => {
  try {
    await deleteMany(ctx.req.body.ids);
    ctx.status = 200;
    return (ctx.body = {
      success: true,
    });
  } catch (e) {
    return (ctx.body = {
      success: false,
      error: e.message,
    });
  }
};
const update = async (ctx) => {
  try {
    await updateTodo(ctx.req.body, ctx.request.params.id);
    ctx.status = 200;
    return (ctx.body = {
      success: true,
    });
  } catch (e) {
    return (ctx.body = {
      success: false,
      error: e.message,
    });
  }
};
const updateManyTodoes = async (ctx) => {
  try {
    await updateMany(ctx.req.body);
    ctx.status = 200;
    return (ctx.body = {
      success: true,
    });
  } catch (e) {
    return (ctx.body = {
      success: false,
      error: e.message,
    });
  }
};

module.exports = { getTodos, save, deleteOneTodo, deleteManyTodoes, update, updateManyTodoes };
