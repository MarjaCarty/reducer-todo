import React from "react";

export default function TodoForm({ todoList }) {
  return (
    <div>
      <input
        type="text"
        name="todoText"
        value={(e) => (todoList.text = e.target.value)}
      />
    </div>
  );
}
