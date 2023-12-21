import React, { useState } from "react";
import fetchTodoApi from "../../../../api/todoApi";
const AddTodoForm = ({ fetchAllTodos }) => {
  const [value, setValue] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!value.trim() || !value) return;
    if (value) {
      try {
        const res = await fetchTodoApi(`todoes`, {
          method: "POST",
          body: JSON.stringify({ name: value.trim() }),
        });
        const resData = await res.json();
        if (!resData?.success) {
          console.log(resData?.error);
        }
        await fetchAllTodos();
      } catch (error) {}
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <input type="submit" value="Create to do" />
    </form>
  );
};

export default AddTodoForm;
