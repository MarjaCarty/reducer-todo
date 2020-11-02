import React from "react";
import Todo from "./Todo";

import { addTodo, toggleCompleted, clearCompleted } from "../actions/actions";

export default function TodoList({ todoList }) {
  return (
    <div>
      {todoList.map((todo) => {
        return (
          <Todo text={todo.text} completed={todo.completed} id={todo.id} />
        );
      })}
    </div>
  );
}
