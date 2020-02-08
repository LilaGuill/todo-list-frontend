import React from "react";

const TodoList = ({ todos }) => {
  const todoList = todos.map((todo, index) => {
    return <div key={index}>{todo}</div>;
  });

  return <div>{todoList}</div>;
};

export default TodoList;
