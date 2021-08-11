import React, { useState } from "react";
import Checkbox from '@material-ui/core/Checkbox';
import { connect } from "react-redux";
import { createTodoList } from '../../Action/save_list';
import { completeTodoList, removeTodoList } from '../../Action/complete_todo';
const Home = (props) => {
  const {}=props;
  const [input, setInput] = useState("");
  const [todo, setTodo] = useState([]);
  const [checkedState, setCheckedState] = useState(false);

  // console.log(checked)
  // const dispatch = useDispatch(function)
  const handleSubmit = e => {
    e.preventDefault();
    setTodo([...todo, input]);
    setInput("");
   props.dispatch(createTodoList(input))
  };

  const deleteToDo = key => {
    setTodo(todo.filter((data, index) => index !== key));
  };
// const checked=props.completedList.some((item)=>props.todolist.indexOf[item]);
// const found = props.todolist.some(r=> props.completedList.indexOf(r) >= 0)
// console.log(found)
// console.log(checked,"checked")
  const handleChange = (data,position,e) => {
    console.log(data)
    props.dispatch(completeTodoList(data))
   if(props.completedList.includes(data)){
    props.dispatch(removeTodoList(data))
   }
  };


  return (
    <div>
      <h2>To Do work here..!!</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Type a ToDo work"
          value={input}
          onChange={e => setInput(e.target.value)}
          type="text"
        />
        <button type="submit"> Submit</button>
      </form>

      <ul>
        {props.todolist && props.todolist.map((data, index) => {
          return(
          <>
          <Checkbox
          checked={props.completedList.includes(data)}
          onChange={(e)=>handleChange(data,index,e)}
           inputProps={{ 'aria-label': 'primary checkbox' }}
          />
            {data}
            <i className="fa fa-trash-alt" onClick={() => deleteToDo(index)} />
            </>
          )
        })}
      </ul>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    todolist:state.todolist,
     completedList:state.completeTodoList
  };
};
export default connect(mapStateToProps)(Home);
