import { ActionTypes } from "../actionTypes/actionTypes";

const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD:
      const tempTodos = state.todos.concat(action.payload);
      return { todos: tempTodos };

    case ActionTypes.DELETE:
      const filtred = state.todos.filter((todo) => todo.id !== action.payload);
      return {
        todos: filtred,
      };

    case ActionTypes.UPDATE:
      const updated = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      return { todos: updated };

    case ActionTypes.SET:
      return { todos: action.payload };
    default:
      return state;
  }
};

export default todoReducer;
