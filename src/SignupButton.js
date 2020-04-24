import React, { Component } from 'react';

class SignupButton extends Component {
    render() {
        return (
            <div>
                    <div className="p-t-15">
                    <button className="btn btn--radius-2 btn--blue" type="button" onClick={this.submitHandler}>Submit</button>
                  </div>
            </div>
        );
    }
}

export default SignupButton;