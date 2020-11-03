import React, { useReducer } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { reducer } from "./reducers/reducer";
import { addTodo, toggleCompleted, clearCompleted } from "./actions/actions";

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  const add = (todo) => {
    dispatch(addTodo(todo));
  };
  console.log(state);
  const finishTodo = (todo) => {
    dispatch(toggleCompleted(todo));
  };

  const clearTodos = () => {
    dispatch(clearCompleted(state));
  };

  return (
    <div className="todos-container">
      <h1>Welcome to your Todo App!</h1>
      <TodoForm add={add} clearTodos={clearTodos} />
      <TodoList
        finishTodo={finishTodo}
        todoList={state}
        clearTodos={clearTodos}
      />
    </div>
  );
};

export default App;
