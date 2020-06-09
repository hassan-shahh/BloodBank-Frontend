import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavUser from "./NavUser";

class Requestdet extends Component {
  constructor(props) {
    super();
    this.state = {
      id: props.location.state.userid,
      details: [],
    };
  }

  componentDidMount() {
    console.log(this.state.id);
    console.log("hello");
    fetch("http://localhost:4000/userdetails", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: this.state.id,
      }),
    })
      .then((res) => res.json())
      .then((res) => this.setState({ details: res }));
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <div>
          <NavUser />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-offset-2 col-md-8 col-lg-offset-3 col-lg-6">
              <Link to="/search">
                <button
                  type="button"
                  class="btn btn-danger"
                  style={{ "margin-top": "15px", alignSelf: "center" }}
                >
                  Back
                </button>
              </Link>
              <div style={{ "margin-top": "20px" }}>
                <div className="col-sm-12 well profile">
                  <div className="col-xs-12 col-sm-8">
                    <h2>
                      {this.state.details.map((arr) => (
                        <li
                          style={{ color: "#353b48", "font-size": 20 }}
                          key={arr.UserID}
                        >
                          <h1>{arr.FirstName}</h1>
                          <strong>Age: </strong> {arr.Age}{" "}
                          <p>
                            <strong>Age: </strong> {arr.Age}{" "}
                          </p>
                          <p>
                            <strong>Gender: </strong> {arr.Gender}{" "}
                          </p>
                          <p>
                            <strong>Address: </strong> {arr.Address}{" "}
                          </p>
                          <p>
                            <strong>Contact: </strong> {arr.ContactNo}{" "}
                          </p>
                        </li>
                      ))}
                    </h2>
                  </div>
                  <div className="col-xs-12 col-sm-4 text-center well profile">
                    <figure>
                      <img
                        src="https://clipartart.com/images/clipart-profile.jpg"
                        alt=""
                        className="img-circle img-responsive"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Requestdet;
