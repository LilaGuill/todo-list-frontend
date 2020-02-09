import React from "react";
import Axios from "axios";
let url = "https://react-todo-list-api.herokuapp.com/create";

const Save = todos => {
  const saveTodos = async () => {
    const data = { task: todos.todos };
    const res = await Axios.post(url, { data });
    console.log(res);
  };

  return (
    <div className="wrapper-btn">
      <button onClick={saveTodos} className="btn-save">
        Save
      </button>
    </div>
  );
};

export default Save;
