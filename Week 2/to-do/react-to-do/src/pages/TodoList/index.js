import React, { useCallback } from "react";
import "./style.css";

import fetchTodoApi from "../../api/todoApi";
import useFetchData from "../../hooks/useFetchData";

import Loading from "../../components/Loading";
import AddTodoForm from "./components/AddTodoForm";
import Todo from "./components/Todo";

function TodoList() {
  const {
    data: todoes,
    fetchAllData: fetchAllTodos,
    setLoading,
    loading,
  } = useFetchData({ endpoint: "todoes" });

  const updateTodo = useCallback(async (ids, isCompleted) => {
    try {
      setLoading(true);
      await fetchTodoApi(`todoes`, {
        method: "PUT",
        body: JSON.stringify({
          ids: typeof ids === "number" ? [ids] : ids,
          isCompleted,
        }),
      });
      await fetchAllTodos();
    } catch (error) {}
  }, []);
  const deteleTodo = useCallback(async (ids) => {
    try {
      setLoading(true);
      await fetchTodoApi(`todoes`, {
        method: "DELETE",
        body: JSON.stringify({ ids: typeof ids === "number" ? [ids] : ids }),
      });
      await fetchAllTodos();
    } catch (error) {}
  }, []);
  return (
    <div className="app">
      <div className="todo-list">
        {loading ? (
          <Loading />
        ) : (
          todoes.map((todo) => (
            <Todo
              key={todo?.id}
              index={todo?.id}
              todo={todo}
              completeTodo={updateTodo}
              removeTodo={deteleTodo}
            />
          ))
        )}
        {!loading && <AddTodoForm fetchAllTodos={fetchAllTodos} />}
      </div>
    </div>
  );
}

export default TodoList;
