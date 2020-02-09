import React from "react";
import Axios from "axios";
let url = "https://react-todo-list-api.herokuapp.com/create";

const Save = todos => {
  const saveTodos = async () => {
    console.log(todos);
    const res = await Axios.post(url, todos.todos);
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
