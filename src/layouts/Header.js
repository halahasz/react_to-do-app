import React from "react";
import {Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h1>TodoList</h1>
      <nav>
        <Link to="/">Home</Link> |&nbsp; <Link to="/about">About</Link>
      </nav>
    </header>
  );
};

export default Header;
