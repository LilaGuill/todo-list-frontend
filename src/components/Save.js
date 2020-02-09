import React from "react";
import Axios from "axios";
let url = "https://react-todo-list-api.herokuapp.com/create";

const Save = todos => {
  const todosArr = todos.todos;

  const saveTodos = async () => {
    for (let i = 0; i < todosArr.length; i++) {
      const data = {
        task: todosArr[i].task,
        isChecked: todosArr[i].isChecked
      };
      const res = await Axios.post(url, data);
      console.log(res.status);
    }
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
