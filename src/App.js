import React from "react";
import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useEffect, useState } from "react";

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const getTodo = () => {
    fetch("http://localhost:8080/todos/")
      .then((res) => res.json())
      .then((res) => {
        setTodoList(res);
      })
      .catch((err) => console.log(err));
  };

  const addTodo = ({ title, contents }) => {
    const newTodo = {
      todoTitle: title,
      todoContents: contents,
    };

    fetch("http://localhost:8080/todos/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newTodo),
    })
      .then((res) => {
        if (res.status === 201 || res.status === 200) {
          getTodo();
        }
      })
      .catch((err) => console.log(err));
  };

  const deleteTodo = (id) => {
    fetch(`http://localhost:8080/todos/${id}`, { method: "delete" }) //
      .then((res) => {
        if (res.status === 202 || 204) {
          getTodo();
        }
      });
  };

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
