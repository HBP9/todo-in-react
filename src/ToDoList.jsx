import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import List from "./List";

const ToDoList = () => {
    const [item,setItem] = useState('');
    const [newItem,setNewItem] = useState([]);
    const itemEvent = (event) => {
        setItem(event.target.value);
    };
    const listOfItems = () => {
        setNewItem((prevValue) => {return [...prevValue,item]});
        setItem('');
    };
    return (
        <>
            <div className="main">
                <div className="todo">
                    <br />
                    <h1> ToDo List </h1>
                    <br />
                    <input type='text' value={item} placeholder="Add Task" onChange={itemEvent}/>
                    <Button className="newBtn" onClick={listOfItems}> <AddIcon /> </Button>
                    <br />
                    <ol>
                        {newItem.map((val,index) => {return <List key={index} id={val} text={val} setNewItem={setNewItem} newItem={newItem} />})}
                    </ol>
                    <br />
                </div>
            </div>
        </>
    )
}

export default ToDoList;