import React from "react";

const TodoList = ({ todos, setTodos, toggle, search }) => {
  const handleChange = (index, isChecked) => {
    const copyTodo = [...todos]; //copie dans un nouveau tableau
    isChecked
      ? (copyTodo[index].isChecked = false)
      : (copyTodo[index].isChecked = true); //si la task est faite elle est barrée

    if (copyTodo[index].isChecked === true) {
      //la task est retirée du tableau
      const removed = copyTodo.splice(index, 1);
      //la task est ajoutée à la fin du tableau
      copyTodo.push(removed[0]);
    }

    setTodos(copyTodo);
  };

  const remove = index => {
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
              handleChange(index, isChecked);
            }}
            checked={isChecked}
          />
          <div className={isChecked ? "list-item crossed" : "list-item"}>
            {task}
          </div>
          <i
            onClick={() => {
              remove(index);
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
