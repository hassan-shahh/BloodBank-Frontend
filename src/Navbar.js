import React, { Component } from 'react';
import "./s.css"
import {Link} from 'react-router-dom'
class Navbar extends Component {
    render() {
        return (
            <div>
                <nav>
            <ul className = "nav-links">
            <Link to='/Login'>
            <li>Login</li>
            </Link>
            <Link to = '/Regform'>
            <li>Sign Up</li>
            </Link>
            </ul>
                </nav>
                <Link to='/NewCrud'>
                <button>Request Blood</button>
                </Link>
            </div>
        );
    }
}

export default Navbar;