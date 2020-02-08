import React, { useState } from "react";

const NewTask = ({ todos, setTodos, newTask, setNewTask }) => {
  const [colorButton, setColorButton] = useState("btn-is-inactive");

  const handleChange = event => {
    //désactive le trait rayé de l'input
    setColorButton("btn-is-active");
    setNewTask(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault(); //empêche le comportement par default
    const copyTodos = [...todos]; //Copie le contennu de todos dans un nouveau tableau
    copyTodos.push([newTask, false]); //ajoute au tableau la nouvelle tâche
    setTodos(copyTodos); //mise à jour de l'état
    setColorButton("btn-is-inactive"); //change la couleur du button
    setNewTask(""); // l'input n'a plus de value
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={handleChange}
          placeholder="New task"
        ></input>
        <button type="submit" className={colorButton}>
          Add task
        </button>
      </form>
    </div>
  );
};

export default NewTask;
