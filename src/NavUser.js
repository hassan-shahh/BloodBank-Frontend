import React, { Component } from "react";

import { Link } from "react-router-dom";

class NavUser extends Component {
  render() {
    return (
      <div>
        <header style={hstyle}>
          <h1>BloodBank</h1>
          <Link to={{ pathname: "/user" }} style={lStyle}>
            Home
          </Link>
          <Link to={{ pathname: "/search" }} style={lStyle}>
            Search Requests
          </Link>
          <Link to="/YourReq" style={lStyle}>
            Your Request
          </Link>
          <Link to="/Reqform" style={lStyle}>
            Place Request
          </Link>
          <Link to="/" style={lStyle} onClick={() => localStorage.clear("tok",)}>
        Logout
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

export default NavUser;
