export const [ADD, TOGGLE, CLEAR] = ["ADD", "TOGGLE", "CLEAR"];

export const addTodo = (text) => {
  return { type: ADD, id: Date.now(), todo: text };
};

export const toggleCompleted = (todo) => {
  return { type: TOGGLE, payload: todo };
};

export const clearCompleted = (todoList) => {
  return { type: CLEAR };
};
