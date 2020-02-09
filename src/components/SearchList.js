import React from "react";

const searchList = ({ search, todos, setTodos }) => {
  const filteredTask = [];

  todos.map((todo, index) => {
    let task = todo[0];
    let isChecked = todo[1];

    const handleChange = () => {
      const copyTodo = [...todos]; //copie dans un nouveau tableau
      isChecked ? (copyTodo[index][1] = false) : (copyTodo[index][1] = true); //si la task est faite elle est barrée
      setTodos(copyTodo); //mise a jour du state

      //la task est retirée du tableau
      const orderTodo = [...todos];
      const removed = orderTodo.splice(index, 1);
      //la task est ajoutée à la fin du tableau
      orderTodo.push(removed[0]);
      //mise a jour du state
      setTodos(orderTodo);
    };

    const remove = () => {
      const copyTodo = [...todos];
      copyTodo.splice(index, 1);
      setTodos(copyTodo);
    };

    if (task.indexOf(search) >= 0) {
      return filteredTask.push(
        <div className="list" key={index}>
          <input type="checkbox" onChange={handleChange} checked={isChecked} />
          <div className={isChecked ? "list-item crossed" : "list-item"}>
            {task}
          </div>
          <i onClick={remove} className="fas fa-trash"></i>
        </div>
      );
    }

    return filteredTask;
  });

  return <div className="wrapper-list">{filteredTask}</div>;
};

export default searchList;
