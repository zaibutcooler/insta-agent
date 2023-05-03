import React from "react";

const Todolist = () => {
  return (
    <div className="todo-box" style={{ textAlign: "center" }}>
      <br></br>
      <h1 className="title is-3">Todo list</h1>
      <form>
        <input type="text" className="input" style={{ width: 500 }} />
        <button className="button is-primary">Add task</button>
      </form>
    </div>
  );
};

export default Todolist;
