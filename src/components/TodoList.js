import React from "react";
import "../assets/TodoList.css";
import TodoItem from "./TodoItem";

const TodoList = ({ deleteTodo, updateTodo, todoList }) => {
  return (
    <div className="todolist">
      {todoList.map((todoItem, idx) => {
        return (
          <TodoItem
            key={idx}
            deleteTodo={deleteTodo}
            updateTodo={updateTodo}
            todoItem={todoItem}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
