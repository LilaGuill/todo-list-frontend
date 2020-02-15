import React, { useState } from "react";
import axios from "axios";

const Input = ({
  toggle,
  todos,
  setTodos,
  newTask,
  setNewTask,
  search,
  setSearch
}) => {
  const [colorButton, setColorButton] = useState("btn-is-inactive");

  const handleChange = event => {
    //désactive le trait rayé de l'input
    if (toggle === "searchTask") {
      setSearch(event.target.value);
    } else {
      setNewTask(event.target.value);
      setColorButton("btn-is-active");
    }
  };

  const handleSubmit = async event => {
    event.preventDefault(); //empêche le comportement par default

    if (toggle === "addTask") {
      const response = await axios.post("http://localhost:3000/create", {
        task: newTask
      });
      console.log(response.data);

      // const copyTodos = [...todos]; //Copie le contennu de todos dans un nouveau tableau
      // copyTodos.push({ task: newTask, isChecked: false }); //ajoute au tableau la nouvelle tâche
      // setTodos(copyTodos); //mise à jour de l'état
      setColorButton("btn-is-inactive"); //change la couleur du button
      setNewTask(""); // l'input n'a plus de value
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={toggle === "addTask" ? newTask : search}
          onChange={handleChange}
          placeholder={toggle === "addTask" ? "Add task" : "Search task"}
          required
        />

        <button type="submit" className={colorButton}>
          {toggle === "addTask" ? "Add task" : "Search"}
        </button>
      </form>
    </div>
  );
};

export default Input;
