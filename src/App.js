import React, { useState } from "react";
import Todo from "./Todo";

const App = () => {
  const [inputList,setInputList] = useState("");
  const [Items,setItems] = useState([]);
  const addItem = (event) => {
    setInputList(event.target.value);
  };
  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
    setInputList('');
  };
  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
    <div className="main">
      <div className="todo">
      <h1>ToDo List</h1>
      <input type='text' placeholder="Enter Task" name="task" value={inputList} autoComplete="off" onChange={addItem} /><br />
      <button onClick={listOfItems}>Add Task</button>
      {/* <div className="list"> */}
      <ol>
      {Items.map((itemval,index) => {
       return <Todo key={index} id={index} text={itemval} onSelect={deleteItems} />;
      })}
      </ol>
      {/* </div> */}
      </div>
      </div>
    </>
  )
}
export default App;