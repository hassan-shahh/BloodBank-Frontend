import React, { Component } from 'react';

class Reqform extends Component {  constructor() {
  super();


  this.state = {
      BloodTag: '',
      Status: 'Incomplete',
      Location:'',
      Donorcount:'',
      Dateofrequest:'',
      Cause:'',
      Bloodtype:'',
      
}
  this.handlechange = this.handlechange.bind(this)
  this.submitHandler = this.submitHandler.bind(this)
}
handlechange(event) {
  this.setState({
      [event.target.name]: event.target.value
  })
}
submitHandler() {
  fetch('http://localhost:4000/reservation', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
          "BloodTag": this.state.BloodTag,
          'Status': this.state.Status,
          "Location":this.state.Location,
          "Cause":this.state.Cause,
          "Bloodtype":this.state.Bloodtype,
          "Donorcount":this.state.Donorcount,
          "Dateofrequest":this.state.Dateofrequest



      }
      )
  })
}
    render() {
        return (
                <div>
                  <meta charSet="UTF-8" />
                  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
                  <title>Sign Up Form by Colorlib</title>
                  {/* Font Icon */}
                  <link rel="stylesheet" href="temp/fonts/material-icon/css/material-design-iconic-font.min.css" />
                  {/* Main css */}
                  <link rel="stylesheet" href="temp/css/style.css" />
                  <div className="main">
                    <div className="container">
                      <div className="signup-content">
                        <div className="signup-img">
                          <img src="temp/images/signup-img.jpg" alt="" />
                        </div>
                        <div className="signup-form">
                          <form method="POST" className="register-form" id="register-form" onSubmit={this.submitHandler}>
                            <h2>Request For Blood</h2>
                            <div className="form-row">
                              <div className="form-group">
                                <label htmlFor="state">Blood Type</label>
                                <div className="form-select">
                                  <select name="state" id="state" name="Bloodtype" value={this.state.Bloodtype} onChange={this.handlechange} placeholder="Blood Type"  >
                                    <option value />
                        <option value="Blood">Blood</option>
                        <option value="White Blood">White Blood</option>
                        <option value="Platelets">Platelets</option>
                                  </select>
                                  <span className="select-icon"><i className="zmdi zmdi-chevron-down" /></span>
                                </div>
                              </div>
                              </div>
                              <div className="form-group">
                              <label htmlFor="address">Location:</label>
                              <input type="text" name="Location" value={this.state.Location} onChange={this.handlechange} placeholder="Location"   required />
                            </div>
                            
                            <div className="form-row">
                              <div className="form-group">
                                <label htmlFor="state">Blood Type</label>
                                <div className="form-select">
                                  <select name="state" id="state" name="BloodTag" value={this.state.BloodTag} onChange={this.handlechange} placeholder="BloodType"  >
                                    <option value />
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                                  </select>
                                  <span className="select-icon"><i className="zmdi zmdi-chevron-down" /></span>
                                </div>
                              </div>
                              <div className="form-group">
                                <label htmlFor="Donorcount">Donors Needed</label>
                                <div className="form-select">
                                  <select name="Donorcount" id= "Donorcount" name="Donorcount" value={this.state.Donorcount} onChange={this.handlechange} >
                                    <option value />
                                    <option value="1" selected>1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                  </select>
                                  <span className="select-icon"><i className="zmdi zmdi-chevron-down" /></span>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <label htmlFor="Cause">Cause :</label>
                              <div className="form-select">
                                <select name="Cause" id="Cause" name="Cause" value={this.state.Cause} onChange={this.handlechange}   >
                                  <option value />
                                  <option value="Accident">Accident</option>
                                  <option value="Surgery">Surgery</option>
                                  <option value="Pregnancy">Pregnancy</option>
                                  <option value="Cancer">Cancer</option>
                                  <option value="Transplant">Transplant</option>
                                  
                                  
                                </select>
                                <span className="select-icon"><i className="zmdi zmdi-chevron-down" /></span>
                              </div>
                            </div>
                            <div className="form-group">
                              <label htmlFor="Phone">DATE:</label>
                              <input type="Phone" name="Dateofrequest" value={this.state.Dateofrequest} onChange={this.handlechange} placeholder="Date" />
                            </div>
                            <div className="form-submit">
                              < button type="button" className="button" name="button" id="button" onClick={this.submitHandler}>Submit</button>
                            </div>
                          </form>
                       
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* JS */}
                  {/* This templates was made by Colorlib (https://colorlib.com) */}
                </div>
        );
    }x
}

export default Reqform;