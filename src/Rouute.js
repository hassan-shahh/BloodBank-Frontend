import React, { Component } from 'react';
import Nav from "./Nav"; 
import Try from "./Try"; 
import NewCrud from './SearchForRequests'

import Regform from "./Regform"; 
import Loginnew from './Loginnew';
import SearchForRequests from './SearchForRequests';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Reqform from './Reqform'
import Requestdet from './Requestdet'
import axios from "axios";
import Modal, { div } from "react-modal";
import AdminHead from "./AdminHead";
import AddEmp from "./AddEmp";
import { Link } from "react-router-dom";
import UpdateEmp from "./UpdateEmp";
import AdminRequest from "./AdminRequest";
import AdminUser from "./AdminUser";
import AdminReq from "./AdminReq";
class Rouute extends Component {
    render() {
        return (
            <Router>
            <div className ="s">
               <Switch>
                <Route path="/" exact component={Nav} />
                <Route path="/Login" exact component={Loginnew} />
                <Route path="/Regform" exact component={Regform} />
                <Route path="/search" exact component={ SearchForRequests} />   
                <Route path="/Reqform" exact component={Reqform} />
                <Route path="/detail/:id" exact component={Requestdet} />
                <Route path="/emp/add" exact component={AddEmp} />
                <Route path="/emp/update" exact component={UpdateEmp} />
                <Route path="/adminreq" exact component={AdminRequest} />
                <Route path="/adminuser" exact component={AdminUser} />
                <Route path="/adminhome" exact component={AdminReq} />

                
                </Switch>
            </div>

            </Router>
        );
    }
}
export default Rouute; 