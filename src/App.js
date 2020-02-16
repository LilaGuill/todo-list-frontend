import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Input from "./components/Input";
import Footer from "./components/Footer";
import "./App.css";
import axios from "axios";
// let url = "https://react-todo-list-api.herokuapp.com";
let url = "http://localhost:3000";

function App() {
  const [todos, setTodos] = useState([]);
  const [isLaoding, setIsLoading] = useState(true);
  const [newTask, setNewTask] = useState("");
  const [toggle, setToggle] = useState("addTask");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);

        setTodos(response.data);
        setIsLoading(false);
      } catch (error) {}
    };

    fetchData();
  }, [newTask]);

  return (
    <div>
      <Header setToggle={setToggle} />
      {isLaoding ? (
        <p>Loading</p>
      ) : (
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
        </div>
      )}

      <Footer />
    </div>
  );
}

export default App;
