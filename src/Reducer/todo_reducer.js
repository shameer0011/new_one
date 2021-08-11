const toDoReducersReducersDefaultValue = [];
const toDoReducers = (state = toDoReducersReducersDefaultValue, action) => {
  switch (action.type) {
    case "ADD-TODO-LIST":
      return [...state, action.todolist];
      break;
    default:
      return state;
      break;
  }
};
export default toDoReducers;
