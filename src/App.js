import React from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const getTodo = () => {
    fetch("http://localhost:8080/todos", {
      method: "get",
    })
      .then((res) => res.json())
      .then((res) => setTodoList(res));
  };

  const addTodo = () => {};

  const deleteTodo = () => {};

  const updateTodo = () => {};

  useEffect(() => {
    getTodo();
  }, []);

  return (
    <div className="todo--container">
      <TodoInput addTodo={addTodo}></TodoInput>
      <TodoList
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
        todoList={todoList}
      ></TodoList>
    </div>
  );
};

export default App;
