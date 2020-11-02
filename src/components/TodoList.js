import React, { useReducer } from "react";
import Todo from "./Todo";
import { initialState, reducer } from "../reducers/reducer";

export default function TodoList() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Working</h1>
    </div>
  );
}
