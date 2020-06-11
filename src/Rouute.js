import React, { Component } from "react";
import Nav from "./Nav";
import Home from "./Home";
import HomeUser from "./HomeUser";
import Regform from "./Regform";
import Loginnew from "./Loginnew";
import SearchForRequests from "./SearchForRequests";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Reqform from "./Reqform";
import Requestdet from "./Requestdet";
import axios from "axios";
import Modal, { div } from "react-modal";
import AdminHead from "./AdminHead";
import AddEmp from "./AddEmp";
import { Link } from "react-router-dom";
import UpdateEmp from "./UpdateEmp";
import AdminRequest from "./AdminRequest";
import AdminUser from "./AdminUser";
import AdminReq from "./AdminReq";
import AddUser from "./AddUser";
import UpdateUser from "./UpdateUser";
import AddReq from "./AddReq";
import UpdateReq from "./UpdateReq";
import YourRequest from "./YourRequest";
import { PrivateRoute } from "./PrivateRoute";
import UpdateProfile from "./UpdateProfile";
import Profile from './Profile'
class Rouute extends Component {
  render() {
    return (
      <Router>
        <div>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Bootstrap CRUD Data Table for Database with Modal Form</title>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto|Varela+Round"
          />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
          />
          <style
            type="text/css"
            dangerouslySetInnerHTML={{
              __html:
                '\n    body {\n        color: #566787;\n\t\tbackground: #f5f5f5;\n\t\tfont-family: \'Varela Round\', sans-serif;\n\t\tfont-size: 13px;\n\t}\n\t.table-wrapper {\n        background: #fff;\n        padding: 20px 25px;\n        margin: 30px 0;\n\t\tborder-radius: 3px;\n        box-shadow: 0 1px 1px rgba(0,0,0,.05);\n    }\n\t.table-title {        \n\t\tpadding-bottom: 15px;\n\t\tbackground: #435d7d;\n\t\tcolor: #fff;\n\t\tpadding: 16px 30px;\n\t\tmargin: -20px -25px 10px;\n\t\tborder-radius: 3px 3px 0 0;\n    }\n    .table-title h2 {\n\t\tmargin: 5px 0 0;\n\t\tfont-size: 24px;\n\t}\n\t.table-title .btn-group {\n\t\tfloat: right;\n\t}\n\t.table-title .btn {\n\t\tcolor: #fff;\n\t\tfloat: right;\n\t\tfont-size: 13px;\n\t\tborder: none;\n\t\tmin-width: 50px;\n\t\tborder-radius: 2px;\n\t\tborder: none;\n\t\toutline: none !important;\n\t\tmargin-left: 10px;\n\t}\n\t.table-title .btn i {\n\t\tfloat: left;\n\t\tfont-size: 21px;\n\t\tmargin-right: 5px;\n\t}\n\t.table-title .btn span {\n\t\tfloat: left;\n\t\tmargin-top: 2px;\n\t}\n    table.table tr th, table.table tr td {\n        border-color: #e9e9e9;\n\t\tpadding: 12px 15px;\n\t\tvertical-align: middle;\n    }\n\ttable.table tr th:first-child {\n\t\twidth: 60px;\n\t}\n\ttable.table tr th:last-child {\n\t\twidth: 100px;\n\t}\n    table.table-striped tbody tr:nth-of-type(odd) {\n    \tbackground-color: #fcfcfc;\n\t}\n\ttable.table-striped.table-hover tbody tr:hover {\n\t\tbackground: #f5f5f5;\n\t}\n    table.table th i {\n        font-size: 13px;\n        margin: 0 5px;\n        cursor: pointer;\n    }\t\n    table.table td:last-child i {\n\t\topacity: 0.9;\n\t\tfont-size: 22px;\n        margin: 0 5px;\n    }\n\ttable.table td a {\n\t\tfont-weight: bold;\n\t\tcolor: #566787;\n\t\tdisplay: inline-block;\n\t\ttext-decoration: none;\n\t\toutline: none !important;\n\t}\n\ttable.table td a:hover {\n\t\tcolor: #2196F3;\n\t}\n\ttable.table td a.edit {\n        color: #FFC107;\n    }\n    table.table td a.delete {\n        color: #F44336;\n    }\n    table.table td i {\n        font-size: 19px;\n    }\n\ttable.table .avatar {\n\t\tborder-radius: 50%;\n\t\tvertical-align: middle;\n\t\tmargin-right: 10px;\n\t}\n    .pagination {\n        float: right;\n        margin: 0 0 5px;\n    }\n    .pagination li a {\n        border: none;\n        font-size: 13px;\n        min-width: 30px;\n        min-height: 30px;\n        color: #999;\n        margin: 0 2px;\n        line-height: 30px;\n        border-radius: 2px !important;\n        text-align: center;\n        padding: 0 6px;\n    }\n    .pagination li a:hover {\n        color: #666;\n    }\t\n    .pagination li.active a, .pagination li.active a.page-link {\n        background: #03A9F4;\n    }\n    .pagination li.active a:hover {        \n        background: #0397d6;\n    }\n\t.pagination li.disabled i {\n        color: #ccc;\n    }\n    .pagination li i {\n        font-size: 16px;\n        padding-top: 6px\n    }\n    .hint-text {\n        float: left;\n        margin-top: 10px;\n        font-size: 13px;\n    }    \n\t/* Custom checkbox */\n\t.custom-checkbox {\n\t\tposition: relative;\n\t}\n\t.custom-checkbox input[type="checkbox"] {    \n\t\topacity: 0;\n\t\tposition: absolute;\n\t\tmargin: 5px 0 0 3px;\n\t\tz-index: 9;\n\t}\n\t.custom-checkbox label:before{\n\t\twidth: 18px;\n\t\theight: 18px;\n\t}\n\t.custom-checkbox label:before {\n\t\tcontent: \'\';\n\t\tmargin-right: 10px;\n\t\tdisplay: inline-block;\n\t\tvertical-align: text-top;\n\t\tbackground: white;\n\t\tborder: 1px solid #bbb;\n\t\tborder-radius: 2px;\n\t\tbox-sizing: border-box;\n\t\tz-index: 2;\n\t}\n\t.custom-checkbox input[type="checkbox"]:checked + label:after {\n\t\tcontent: \'\';\n\t\tposition: absolute;\n\t\tleft: 6px;\n\t\ttop: 3px;\n\t\twidth: 6px;\n\t\theight: 11px;\n\t\tborder: solid #000;\n\t\tborder-width: 0 3px 3px 0;\n\t\ttransform: inherit;\n\t\tz-index: 3;\n\t\ttransform: rotateZ(45deg);\n\t}\n\t.custom-checkbox input[type="checkbox"]:checked + label:before {\n\t\tborder-color: #03A9F4;\n\t\tbackground: #03A9F4;\n\t}\n\t.custom-checkbox input[type="checkbox"]:checked + label:after {\n\t\tborder-color: #fff;\n\t}\n\t.custom-checkbox input[type="checkbox"]:disabled + label:before {\n\t\tcolor: #b8b8b8;\n\t\tcursor: auto;\n\t\tbox-shadow: none;\n\t\tbackground: #ddd;\n\t}\n\t/* Modal styles */\n\t.modal .modal-dialog {\n\t\tmax-width: 400px;\n\t}\n\t.modal .modal-header, .modal .modal-body, .modal .modal-footer {\n\t\tpadding: 20px 30px;\n\t}\n\t.modal .modal-content {\n\t\tborder-radius: 3px;\n\t}\n\t.modal .modal-footer {\n\t\tbackground: #ecf0f1;\n\t\tborder-radius: 0 0 3px 3px;\n\t}\n    .modal .modal-title {\n        display: inline-block;\n    }\n\t.modal .form-control {\n\t\tborder-radius: 2px;\n\t\tbox-shadow: none;\n\t\tborder-color: #dddddd;\n\t}\n\t.modal textarea.form-control {\n\t\tresize: vertical;\n\t}\n\t.modal .btn {\n\t\tborder-radius: 2px;\n\t\tmin-width: 100px;\n\t}\t\n\t.modal form label {\n\t\tfont-weight: normal;\n\t}\t\n',
            }}
          />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Login" exact component={Loginnew} />
            <Route path="/Regform" exact component={Regform} />
            <Route path="/search" exact component={SearchForRequests} />
            <PrivateRoute path="/YourReq" exact component={YourRequest} />
            <PrivateRoute path="/Reqform" exact component={Reqform} />
            <PrivateRoute path="/detail/:id" exact component={Requestdet} />
            <PrivateRoute path="/adminhome" exact component={AdminReq} />
            <PrivateRoute path="/adminreq" exact component={AdminRequest} />
            <PrivateRoute path="/adminuser" exact component={AdminUser} />
            <PrivateRoute path="/adminuser/add" exact component={AddUser} />
            <PrivateRoute path="/user" exact component={HomeUser} />
            <PrivateRoute path="/profile" exact component={Profile} />
            <PrivateRoute path="/updateprofile" exact component={UpdateProfile} />
            <PrivateRoute
              path="/adminuser/update"
              exact
              component={UpdateUser}
            />
            <PrivateRoute path="/adminreq/add" exact component={AddReq} />
            <PrivateRoute path="/adminreq/update" exact component={UpdateReq} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default Rouute;
