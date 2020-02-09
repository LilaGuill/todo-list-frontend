import React from "react";

const Header = ({ setToggle }) => {
  const handleSearchTask = () => {
    setToggle("searchTask");
  };

  const handleAddTask = () => {
    setToggle("addTask");
  };
  return (
    <div className="header">
      <i className="fas fa-list-alt icon purple"></i>
      <h1>Todo List</h1>
      <i onClick={handleAddTask} className="fas fa-plus"></i>
      <i onClick={handleSearchTask} className="fas fa-search"></i>
    </div>
  );
};

export default Header;
