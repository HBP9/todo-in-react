import React from "react";

const Todo = (props) => {
    return(
    <>
    <div className="todo_style">
    <button className="button_style" onClick={() => {props.onSelect(props.id);}}> <i class="fas fa-trash"></i> </button>
    <li> {props.text} </li>
    </div>
    </>
)};

export default Todo;