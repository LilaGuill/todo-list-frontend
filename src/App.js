import React, { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Input from "./components/Input";
import Save from "./components/Save";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [toggle, setToggle] = useState("addTask");
  const [search, setSearch] = useState("");

  return (
    <div>
      <Header setToggle={setToggle} />
      <div className="container">
        <TodoList
          todos={todos}
          setTodos={setTodos}
          toggle={toggle}
          search={search}
          setSearch={setSearch}
        />

        <Input
          toggle={toggle}
          todos={todos}
          setTodos={setTodos}
          newTask={newTask}
          setNewTask={setNewTask}
          search={search}
          setSearch={setSearch}
        />
        <Save todos={todos} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
