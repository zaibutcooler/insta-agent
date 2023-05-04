import React, { useState } from "react";

const Todolist = () => {
  const [item, setItem] = useState(" Hello ");
  const [todos, setTodos] = useState([]);

  const handleAdd = (e) => {
    e.preventDefault();
    console.log("Submit");
    setTodos((curentTodos) => {
      return [
        ...curentTodos,
        { id: crypto.randomUUID(), title: item, completed: false },
      ];
    });
    setItem("");
  };
  const toggleTodo = (id, completed) => {
    setTodos((curentTodos) => {
      return curentTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => {
      return currentTodos.filter((todo) => todo.id !== id);
    });
  };
  return (
    <div className="todo-box" style={{ textAlign: "center" }}>
      <br></br>
      <h1 className="title is-3 has-text-light">Todo list</h1>
      <form>
        <input
          type="text"
          className="input"
          style={{ width: 500 }}
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
        <button className="button is-primary" onClick={handleAdd}>
          Add task
        </button>
      </form>

      <ul className="list has-text-white">
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <label className="label is-medium">
                <input
                  type="checkbox"
                  className="checkbox is-large"
                  checked={todo.completed}
                  onChange={(e) => toggleTodo(todo.id, e.target.checked)}
                />
                <span className="has-text-white">{todo.title}</span>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="button is-danger is-small">
                  Delete
                </button>
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todolist;
