import React, { Component } from 'react';
import './List.css'
class Todolist extends Component {
   constructor(props){
    super(props);
    this.state = {
         items :[],
         current : {
             text : '',
             key :''
         }

    }
    this.handlechange=this.handlechange.bind(this)
    this.addItem=this.addItem.bind(this)
   }
   handlechange(event) {

    this.setState({
     // [event.target.name]: event.target.value
     current :{
         text: event.target.value,
         key : Date.now()
     }
    })
  }
  addItem(event){
      event.preventDefault();
      const newitem = this.state.current;
      if (newitem!=""){
          const newItems = [...this.state.items,newItems]
      this.state={
          items : newItems,
          current : {
              text : '',
              key : ''
          }      }}
  }
    render() {
        return (
            <div className = 'App'>
                <header>
                    <form id = 'to-do-form'>
                <input type='text' placeholder='Enter Text' value={this.state.current.text} onChange={this.handlechange}/>
                <button type = 'submit' onClick={this.addItem}>Submit</button>
                </form>
                {this.newitem}
                </header>
            </div>
        );
    }
}

export default Todolist;