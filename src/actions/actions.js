export const [ADD, TOGGLE, CLEAR] = ["ADD", "TOGGLE", "CLEAR"];

export const addTodo = (newTodo) => {
  return { type: ADD, payload: newTodo };
};

export const toggleCompleted = (todo) => {
  const task = { ...todo, completed: !todo.completed };
  return { type: TOGGLE, payload: task };
};

export const clearCompleted = (todoList) => {
  const filteredTodos = todoList.filter((todo) => !todo.completed);
  return { type: CLEAR, payload: filteredTodos };
};
