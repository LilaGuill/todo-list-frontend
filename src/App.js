import React from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import NewTask from "./components/NewTask";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <TodoList />
      <Search />
      <Footer />
    </div>
  );
}

export default App;
