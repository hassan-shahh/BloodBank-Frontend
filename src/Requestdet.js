import React, { Component } from 'react';

class Requestdet extends Component {
constructor(props){
 super()
this.state={
id:props.location.state.userid,
details:[]
}

        
    }

    componentDidMount(){
        console.log(this.state.id)
        console.log('hello')
        fetch('http://localhost:4000/userdetails', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id:this.state.id
            }
            )
        }).then(res=>res.json()).then(res=>this.setState({details:res}))
    }
    render() {
        return (
            <div>
                   {this.state.details.map (arr =>
                    <li key={arr.UserID}>
                        <h1>{arr.Address}</h1>
                    <h1>{arr.ContactNo}</h1>

                    </li>
                    )}
            </div>
        );
    }
}

export default Requestdet;