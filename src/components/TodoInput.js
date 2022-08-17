import React from "react";
import "../assets/TodoInput.css";

const TodoInput = ({ addTodo }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
    const title = e.target[0].value;
    const contents = e.target[1].value;

    addTodo({ title, contents });
    // e.target[0].value = "";
    // e.target[1].value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input placeholder="todo"></input>
      </div>
      <div>
        <input placeholder="memo"></input>
      </div>
      <button>todo </button>
    </form>
  );
};

export default TodoInput;
