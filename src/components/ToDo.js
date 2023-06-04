import React, { useState } from "react";

const ToDo = () => {
  const [task, setTask] = useState("");
  const [ data, setData] = useState([]);

  const addTask = () => {
    setData([...data, {task}])
    setTask("")
  };
  const delTask = (index) => {
    let arr = data;
    arr.splice(index,1);
    setData([...arr]);
  }
  return (
    <div>
      <div className="header">
        <h1>My Todo List</h1>
      </div>
      <div>
        <input
          type="input"
          placeholder="Enter Task"
          value={task}
          onChange={(e)=>setTask(e.target.value)}
        />
        <button type="button" onClick={addTask}>Add</button>
      </div>
      <div>
        <h4>Task</h4>
        <h4>Delete</h4>
      </div>
      <div>
      {data.map((t, index)=>{
        return(
        <div key={index}>
        <h4>{t.task}</h4>
        <button type="button" onClick={()=>delTask(index)} index={index}>Del</button>
        </div>
        )
      })}
      </div>
    </div>
  );
};

export default ToDo;
