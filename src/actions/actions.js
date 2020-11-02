export const [ADD, TOGGLE, CLEAR] = ["ADD", "TOGGLE", "CLEAR"];

export const addTodo = (newTodo) => {
  return { type: ADD, payload: newTodo };
};

export const toggleCompleted = (todo) => {
  return { type: TOGGLE, payload: !todo.completed };
};

export const clearCompleted = (todoList) => {
  const filteredTodos = todoList.filter((todo) => !todo.completed);
  return { type: CLEAR, payload: filteredTodos };
};
