import { combineReducers, createStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoReducer";
import userReducer from "./reducers/userReducer";

const rootReducer = combineReducers({
  userReducer,
  todoReducer,
});

const store = createStore(rootReducer);

export default store;
