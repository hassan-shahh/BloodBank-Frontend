import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={hstyle}>
      <h1>TodoList</h1>
      <Link to="/" style={lStyle}>
        Home
      </Link>
      <Link to="/about" style={lStyle}>
        About
      </Link>
    </header>
  );
}
const hstyle = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "10px",
};

const lStyle = {
  color: "#fff",
  padding: "10px",
};

export default Header;
