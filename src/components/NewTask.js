import React from "react";

const NewTask = ({ todos, setTodos, newTask, setNewTask }) => {
  const handleChange = event => {
    setNewTask(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault(); //empêche le comportement par default
    const copyTodos = [...todos]; //Copie le contennu de todos dans un nouveau tableau
    copyTodos.push(newTask); //ajoute au tableau la nouvelle tâche
    setTodos(copyTodos); //mise à jour de l'état
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={newTask} onChange={handleChange}></input>
        <button type="submit">Add task</button>
      </form>
    </div>
  );
};

export default NewTask;
