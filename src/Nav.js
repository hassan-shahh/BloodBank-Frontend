import React, { Component } from "react";

import { Link } from "react-router-dom";
class Nav extends Component {
  render() {
    return (
      <div>
        <header style={hstyle}>
          <h1 style={{ color: "white" }}>BloodBank</h1>
          <Link to="/" style={lStyle}>
            Home
          </Link>
          <Link to="/Login" style={lStyle}>
            Login
          </Link>
          <Link to="/RegForm" style={lStyle}>
            Registration
          </Link>
          <Link to="/ReqForm" style={lStyle}>
            Place Request
          </Link>
        </header>
      </div>
    );
  }
}

const hstyle = {
  background: "#333",
  color: "#fff",
  textAlign: "Center",
  padding: "10px",
  height: "120px",
};

const lStyle = {
  color: "#fff",
  padding: "10px",
  textAlign: "right",
};

export default Nav;
