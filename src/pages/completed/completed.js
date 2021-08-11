import React from "react";
import {connect} from 'react-redux';
const completed = (props) => {
  return <div>
    {props.completedList && props.completedList.map((data, index) => {
          return(
          <>
            {data}
            </>
          )
        })}

  </div>;
};
const mapStateToProps=(state,props)=>{
  return {
    completedList:state.completeTodoList
  }
}
export default connect(mapStateToProps)(completed)
