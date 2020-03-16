import React, { Component } from 'react';

class Request extends Component {
    render() {
        return (
            <div>
                <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>Sign Up Form by Colorlib</title>
        {/* Font Icon */}
        <link rel="stylesheet" href="/request/fonts/material-icon/css/material-design-iconic-font.min.css" />
        {/* Main css */}
        <link rel="stylesheet" href="/request/css/style.css" />
        <div className="main">
          <div className="container">
            <div className="booking-content">
              <div className="booking-image">
                <img className="booking-img" src="/request/images/form-img.jpg" alt="Booking Image" />
              </div>
              <div className="booking-form">
                <form id="booking-form">
                  <h2>Booking place for your dinner!</h2>
                  <div className="form-group form-input">
                    <input type="text" name="name" id="name" defaultValue required />
                    <label htmlFor="name" className="form-label">Your name</label>
                  </div>
                  <div className="form-group form-input">
                    <input type="number" name="phone" id="phone" defaultValue required />
                    <label htmlFor="phone" className="form-label">Your phone number</label>
                  </div>
                  <div className="form-group">
                    <div className="select-list">
                      <select name="time" id="time" required>
                        <option value>Time</option>
                        <option value="6pm">6:00 PM</option>
                        <option value="7pm">7:00 PM</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="select-list">
                      <select name="Blood Tag" id="Blood Tag" required>
                        <option value>Blood Type Needed</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-radio">
                    <label className="label-radio"> Donors Needed</label>
                    <div className="radio-item-list">
                      <span className="radio-item">
                        <input type="radio" name="Donorcount" defaultValue={1} id="Donorcount"  defaultChecked="checked"         />
                        <label htmlFor="number_people_1">1</label>
                      </span>
                      <span className="radio-item active">
                        <input type="radio" name="number_people" defaultValue={2} id="Donorcount"/>
                        <label htmlFor="number_people_2">2</label>
                      </span>
                      <span className="radio-item">
                        <input type="radio" name="number_people" defaultValue={3} id="Donorcount" />
                        <label htmlFor="number_people_3">3</label>
                      </span>
                      <span className="radio-item">
                        <input type="radio" name="number_people" defaultValue={4} id="Donorcount" />
                        <label htmlFor="number_people_4">4</label>
                      </span>
                      <span className="radio-item">
                        <input type="radio" name="number_people" defaultValue={5} id="Donorcount" />
                        <label htmlFor="number_people_5">5</label>
                      </span>
                    </div>
                  </div>
                  <div className="form-submit">
                    <input type="submit" defaultValue="Book now" className="submit" id="submit" name="submit" />
                    <a href="#" className="vertify-booking">Verify your booking info from your phone</a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

            </div>
        );
    }
}

export default Request;
