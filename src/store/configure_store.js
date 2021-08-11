import { createStore, combineReducers } from "redux";
import completeTodoReducer from "../Reducer/complete_todo";
import toDoReducers from "../Reducer/todo_reducer";
const configureStore = () => {
  const store = createStore(
    combineReducers({
      todolist: toDoReducers,
      completeTodoList: completeTodoReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
export default configureStore;
