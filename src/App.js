import React, { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import SearchList from "./components/SearchList";
import Input from "./components/Input";
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
        {toggle === "addTask" ? (
          <TodoList
            todos={todos}
            setTodos={setTodos}
            toggle={toggle}
            search={search}
            setSearch={setSearch}
          />
        ) : (
          <SearchList
            search={search}
            setSearch={setSearch}
            todos={todos}
            setTodos={setTodos}
          />
        )}

        <Input
          toggle={toggle}
          todos={todos}
          setTodos={setTodos}
          newTask={newTask}
          setNewTask={setNewTask}
          search={search}
          setSearch={setSearch}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
