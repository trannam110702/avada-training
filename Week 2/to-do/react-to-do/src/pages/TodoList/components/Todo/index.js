import React from "react";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div className="todo" style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}>
      <div className="name">{todo.name}</div>
      <div className="actions">
        {todo.isCompleted ? (
          <button onClick={() => completeTodo(index, false)}>Complete</button>
        ) : (
          <button onClick={() => completeTodo(index, true)}>Uncomplete</button>
        )}
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}
export default Todo;
