import React from "react";
import axios from "axios";
// let url = "https://react-todo-list-api.herokuapp.com/remove";
let url = "http://localhost:3000/remove";

const TodoList = ({ todos, setTodos, toggle, search }) => {
  const handleChange = async (index, id) => {
    await axios.post("http://localhost:3000/update", {
      id: id
    });

    const copyTodo = [...todos]; //copie dans un nouveau tableau
    copyTodo[index].isChecked = !copyTodo[index].isChecked;

    if (copyTodo[index].isChecked === true) {
      //la task est retirée du tableau
      const removed = copyTodo.splice(index, 1);
      //la task est ajoutée à la fin du tableau
      copyTodo.push(removed[0]);
    }
    setTodos(copyTodo);
  };

  const remove = async (id, index) => {
    await axios.post(url, { id: id });

    const copyTodo = [...todos];
    copyTodo.splice(index, 1);
    setTodos(copyTodo);
  };

  const todoList = todos.map((todo, index) => {
    const { task, isChecked } = todo;

    if (
      (toggle === "searchTask" && task.indexOf(search) >= 0) ||
      toggle === "addTask"
    ) {
      return (
        <div className="list" key={index}>
          <input
            type="checkbox"
            onChange={() => {
              handleChange(index, todo._id);
            }}
            checked={isChecked}
          />
          <div className={isChecked ? "list-item crossed" : "list-item"}>
            {task}
          </div>
          <i
            onClick={() => {
              remove(todo._id, index);
            }}
            className="fas fa-trash"
          ></i>
        </div>
      );
    }
    return null;
  });

  return <div className="wrapper-list">{todoList}</div>;
};
export default TodoList;
