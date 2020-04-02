import React, { Component } from 'react';
import './Seac.css'
class SearchForRequests extends Component {
    constructor() {
        super();
    
    
        this.state = {
            Donors: [],
            BloodTag: ''
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
        fetch('http://localhost:4000/show', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "BloodTag": this.state.BloodTag
            }
            )
        })
            .then(res => res.json()).then(arr => this.setState({ Donors: arr }))
    } 
        render() {
            return (
                <div>
                    <div>
    
      {/*---- Include the above in your HEAD tag --------*/}
      <title>Awesome Search Box</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
        integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.5.0/css/all.css"
        integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU"
        crossOrigin="anonymous"
      />
      {/* Coded with love by Mutiullah Samim*/}
      <div className="container h-100">
        <div className="d-flex justify-content-center h-100">
          <div className="searchbar">
            <input
              className="search_input"
              name="BloodTag" value={this.state.BloodTag} onChange={this.handlechange}
              type="text"
              placeholder="Enter Blood Type"
            />
            <a href="#" className="search_icon" onClick={this.submitHandler}>
              <i className="fas fa-search" />
            </a>
          </div>
        </div>
      </div>
    </div>;
    <ul>
                            {this.state.Donors.map (arr =>
                                <li key={arr.BloodrequestID}>{arr.BloodTag + " "} 
                                 {arr.Location + " "  }  
                                 {arr.Cause+ " "} 
                                 {arr.Dateofrequest+ " "}</li>)}
    
                        </ul>
    
                </div>
            );
                            }
}

export default SearchForRequests;