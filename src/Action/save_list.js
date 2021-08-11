export const createTodoList = list => {
  console.log(list, "list");
  //   const { id, original_title, overview, popularity, poster_path } = movie;
  return {
    type: "ADD-TODO-LIST",
    todolist: list,
  };
};
