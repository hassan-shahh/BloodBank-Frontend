import React, { Component } from 'react';
import ContactForm from "./ContactForm"
import Modal from 'react-modal'
class ContactModal extends Component {
    constructor() {
        super()
        this.state = {
            isOn : false
        }
    }
    componentWillMount(){
        Modal.setAppElement('body')
    }
    toggleModal = () =>{
   this.setState({
       isOn :!this.state.isOn
   }) }
    render() {
        return (
            <div>
                <button onClick = {this.toggleModal}>Click</button>
                <Modal isOpen = {this.state.isOn}>
                    <ContactForm/>
                </Modal>
            </div>
        );
    }
}

export default ContactModal;