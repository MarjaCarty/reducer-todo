import { ADD, TOGGLE, CLEAR } from "../actions/actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return [...state, { id: action.id, todo: action.todo, completed: false }];
    case TOGGLE:
      return [
        ...state.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, completed: !todo.completed };
          } else {
            return todo;
          }
        }),
      ];
    case CLEAR:
      return [...state.filter((todo) => !todo.completed)];
    default:
      return { state };
  }
};
