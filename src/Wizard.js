import React, { Component } from 'react';

class Wizard extends Component {
    render() {
        return (
            <div>
                <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="author" content="colorlib.com" />
  <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
  <title>Sign Up Form</title>
  {/* Font Icon */}
  <link rel="stylesheet" href="/apps/fonts/material-icon/css/material-design-iconic-font.min.css" />
  {/* Main css */}
  <link rel="stylesheet" href="/apps/css/style.css" />
  <div className="main">
    <div className="container">
      <h2>Sign up to great new account </h2>
      <form method="POST" id="signup-form" className="signup-form">
        <h3>
          <span className="title_text">Account Infomation</span>
        </h3>
        <fieldset>
          <div className="fieldset-content">
            <div className="form-group">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" name="username" id="username" placeholder="User Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" name="email" id="email" placeholder="Your Email" />
            </div>
            <div className="form-group form-password">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" name="password" id="password" data-indicator="pwindicator" />
              <div id="pwindicator">
                <div className="bar-strength">
                  <div className="bar-process">
                    <div className="bar" />
                  </div>
                </div>
                <div className="label" />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="your_avatar" className="form-label">Select avatar</label>
              <div className="form-file">
                <input type="file" name="your_avatar" id="your_avatar" className="custom-file-input" />
                <span id="val" />
                <span id="button">Select File</span>
              </div>
            </div>
          </div>
          <div className="fieldset-footer">
            <span>Step 1 of 3</span>
          </div>
        </fieldset>
        <h3>
          <span className="title_text">Personal Information</span>
        </h3>
        <fieldset>
          <div className="fieldset-content">
            <div className="form-group">
              <label htmlFor="full_name" className="form-label">Full name</label>
              <input type="text" name="full_name" id="full_name" placeholder="Full Name" />
            </div>
            <div className="form-select">
              <label htmlFor="country" className="form-label">Country</label>
              <select name="country" id="country">
                <option value>Country</option>
                <option value="Australia">Australia</option>
                <option value="USA">America</option>
              </select>
            </div>
            <div className="form-radio">
              <label htmlFor="gender" className="form-label">Gender</label>
              <div className="form-radio-item">
                <input type="radio" name="gender" defaultValue="male" id="male" defaultChecked="checked" />
                <label htmlFor="male">Male</label>
                <input type="radio" name="gender" defaultValue="female" id="female" />
                <label htmlFor="female">Female</label>
              </div>
            </div>
            <div className="form-textarea">
              <label htmlFor="about_us" className="form-label">About us</label>
              <textarea name="about_us" id="about_us" placeholder="Who are you ..." defaultValue={""} />
            </div>
          </div>
          <div className="fieldset-footer">
            <span>Step 2 of 3</span>
          </div>
        </fieldset>
        <div>
        <h3>
          <span className="title_text">Payment Details</span>
        </h3>
        <fieldset>
          <div className="fieldset-content">
            <div className="form-radio">
              <label htmlFor="payment_type">Payment Type</label>
              <div className="form-radio-flex">
                <input type="radio" name="payment_type" id="payment_visa" defaultValue="payment_visa" defaultChecked="checked" />
                <label htmlFor="payment_visa"><img src="/apps/images/icon-visa.png" alt="" /></label>
                <input type="radio" name="payment_type" id="payment_master" defaultValue="payment_master" />
                <label htmlFor="payment_master"><img src="/apps/images/icon-master.png" alt="" /></label>
                <input type="radio" name="payment_type" id="payment_paypal" defaultValue="payment_paypal" />
                <label htmlFor="payment_paypal"><img src="images/icon-paypal.png" alt="" /></label>
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="credit_card" className="form-label">Credit Card</label>
                <input type="text" name="credit_card" id="credit_card" />
              </div>
              <div className="form-group">
                <label htmlFor="cvc" className="form-label">CVC</label>
                <input type="text" name="cvc" id="cvc" />
              </div>
            </div>
            <div className="form-date">
              <label htmlFor="expiry_date">Expiration Date</label>
              <div className="form-flex">
                <div className="form-date-item">
                  <select id="expiry_date" name="expiry_date" />
                  <span className="select-icon"><i className="zmdi zmdi-chevron-down" /></span>
                </div>
                <div className="form-date-item">
                  <select id="expiry_year" name="expiry_year" />
                  <span className="select-icon"><i className="zmdi zmdi-chevron-down" /></span>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="name_of_card" className="form-label">Name of card</label>
              <input type="text" name="name_of_card" id="name_of_card" />
            </div>
          </div>
          <div className="fieldset-footer">
            <span>Step 3 of 3</span>
          </div>
         
        </fieldset>
        </div>
      </form>
    </div>
  </div>
  {/* JS */}
</div>

            </div>
        );
    }
}

export default Wizard;