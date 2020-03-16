import React, { Component } from 'react';

class Reqform extends Component {
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
                          <form method="POST" className="register-form" id="register-form">
                            <h2>student registration form</h2>
                            <div className="form-group">
                              <div className="form-group">
                                <label htmlFor="name">Name :</label>
                                <input type="text" name="name" id="name" required />
                              </div>
                            </div>
                            <div className="form-group">
                              <label htmlFor="address">Address :</label>
                              <input type="text" name="address" id="address" required />
                            </div>
                            <div className="form-radio">
                              <label htmlFor="gender" className="radio-label">Gender :</label>
                              <div className="form-radio-item">
                                <input type="radio" name="gender" id="male" defaultChecked />
                                <label htmlFor="male">Male</label>
                                <span className="check" />
                              </div>
                              <div className="form-radio-item">
                                <input type="radio" name="gender" id="female" />
                                <label htmlFor="female">Female</label>
                                <span className="check" />
                              </div>
                            </div>
                            <div className="form-row">
                              <div className="form-group">
                                <label htmlFor="state">Blood Type</label>
                                <div className="form-select">
                                  <select name="state" id="state">
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
                                  <select name="Donorcount" id= "Donorcount">
                                    <option value />
                                    <option value="1" defaultValue>1</option>
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
                              <label htmlFor="course">Course :</label>
                              <div className="form-select">
                                <select name="course" id="course">
                                  <option value />
                                  <option value="computer">Computer Operator &amp; Pragramming Assistant</option>
                                  <option value="desiger">Designer</option>
                                  <option value="marketing">Marketing</option>
                                </select>
                                <span className="select-icon"><i className="zmdi zmdi-chevron-down" /></span>
                              </div>
                            </div>
                            <div className="form-group">
                              <label htmlFor="Phone">Phone:</label>
                              <input type="Phone" name="Phone" id="Phone" />
                            </div>
                            <div className="form-submit">
                              <input type="submit" defaultValue="Submit Form" className="submit" name="submit" id="submit" />
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