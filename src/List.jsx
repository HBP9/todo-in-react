import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';

const List = (props) => {
    const [line,setLine] = useState(false);
    const cutIt = () => {
        setLine(true);
    };
    const deleteItems = (id) => {
        props.setNewItem(props.newItem.filter((ele,num) =>{
            if (num!==id){
                return num
            }
        }))
    }
    return(
    <>
    <div className="todo_style">
    <span onClick={cutIt}> <CheckIcon className="checkIcon" /> </span>
    <span onClick={() => {deleteItems(props.id)}}> <DeleteIcon className="deleteIcon" /> </span>    
    <li style={{textDecoration : line ? 'line-through' : 'none'}}> {props.text} </li>
    </div>
    </>
    )
}

export default List;