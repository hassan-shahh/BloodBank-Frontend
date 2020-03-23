import React, { Component } from 'react';

class New extends Component {


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
                        <button type="button" onClick={this.submitHandler}>Submit</button>
                    </div>
                </div>
                <div>
                    <ul>
                        {this.state.Donors.map (arr =>
                            <li key={arr.UserID}>{arr.FirstName}</li>)}

                    </ul>
                </div>
            </div>

        );
    }
}

export default New;