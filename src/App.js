import React, { useState } from "react";

import Header from "./components/Header";
import TodoList from "./components/TodoList";
import NewTask from "./components/NewTask";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState([""]);

  return (
    <div>
      <Header />
      <div className="container">
        <TodoList todos={todos} />
        <NewTask
          todos={todos}
          setTodos={setTodos}
          newTask={newTask}
          setNewTask={setNewTask}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
