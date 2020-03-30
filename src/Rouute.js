import React, { Component } from 'react';
import Navbar from "./Navbar"; 
import Login from "./Login"; 

import Regform from "./Regform"; 

import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'

class Rouute extends Component {
    render() {
        return (
            <Router>
            <div className ="s">
               <Switch>
                <Route path="/" exact component={Navbar} />
                <Route path="/Login" exact component={Login} />
                <Route path="/Regform" exact component={Regform} />
                </Switch>
            </div>

            </Router>
        );
    }
}
export default Rouute; 