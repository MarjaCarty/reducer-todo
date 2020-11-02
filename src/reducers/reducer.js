import { ADD, TOGGLE, CLEAR } from "../actions/actions";

export const initialState = {
  todoList: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD:
      return { ...state, todoList: [...state.todoList, action.payload] };
    case TOGGLE:
      return { ...state, todoList: [...state.todoList, action.payload] };
    case CLEAR:
      return { ...state, todoList: [action.payload] };
    default:
      return { state };
  }
};
