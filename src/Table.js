import React, { Component } from 'react'
import './tabl.css'
import Sbar from './Sbar.js'
class Table extends Component {
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
   renderTableData() {
    return this.state.Donors.map((arr) => {
       const { BloodrequestID, BloodTag, Location, Cause } = arr //destructuring
       return (
          <tr key={BloodrequestID}>
             <td>{BloodTag}</td>
             <td>{Location}</td>
             <td>{Cause}</td>
          </tr>
       )
   })}
 
  /* renderTableHeader() {
    let header = Object.keys(this.state.Donors[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }*/

 render() {
    return (
       <div>
          <Sbar onClick={this.submitHandler}/>
          <h1 id='title'>React Dynamic Table</h1>
          <table id='students'>
             <tbody>
                {this.renderTableData()}
             </tbody>
          </table>
       </div>
    )
 }

}
export default Table