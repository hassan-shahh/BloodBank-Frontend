import React, { Component } from 'react'

import {Link} from 'react-router-dom'
class Nav extends Component {
    render() {
        return (
            <div>
       {/*        <h2 className="navbar-brand brand-name">
  <a href="index.html"><img className="img-responsive2" src="images/12.png" /></a>
        </h2>*/}

    <header style={hstyle }>
      <h1>BloodBank</h1>
      <Link to="/" style={lStyle}>
        Home
      </Link>
      <Link to="/Login" style={lStyle }>
        Login
      </Link>
      <Link to="/RegForm" style={lStyle}>
        Registration
        </Link>
        <Link to="/search" style={lStyle}>
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
  textAlign:'Center',
  padding: "10px",
  height: "120px",
};

const lStyle = {
  color: "#fff",
  padding: "10px",
  textAlign: 'right',
};

export default Nav;