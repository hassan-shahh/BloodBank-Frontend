import React, { Component } from 'react';
import Navbar from "./Navbar"; 
import Login from "./Login"; 

import Regform from "./Regform"; 

import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
class Routing extends Component {
    render() {
        return (
            <Router>
            <div className ="s">
               <Switch>
                <Navbar/>
                <Route path="/Login" exact component={Login} />
                <Route path="/Regform" exact component={Regform} />

                <Regform/>
                </Switch>
            </div>

            </Router>
        );
    }
}

export default Routing;