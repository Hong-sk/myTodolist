import React from "react";
import "../assets/TodoItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faEraser } from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ deleteTodo, updateTodo, todoItem }) => {
  const { todoTitle, todoContents, id } = todoItem;
  const handleDelete = () => {
    deleteTodo(id);
  };
  const handleUpdate = () => {};

  return (
    <div className="todo--item">
      <p className="todo--title">{todoTitle}</p>
      <p className="todo--contents">{todoContents}</p>
      <FontAwesomeIcon
        className="update icon"
        icon={faEraser}
        onClick={handleUpdate}
      />
      <FontAwesomeIcon
        className="remove icon"
        icon={faTrashCan}
        onClick={handleDelete}
      />
    </div>
  );
};

export default TodoItem;
