import React, { Component } from 'react';


import Modal from 'react-modal'


class FeebackModal extends Component {
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
                <div>
  <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#modalPoll-1" onClick ={this.toggleModal}>Launch
    modal</button>
  {/* Modal: modalPoll */}
  <div className="modal fade right" id="modalPoll-1" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false" isOpen ={this.state.isOn}>
    <div className="modal-dialog modal-full-height modal-right modal-notify modal-info" role="document">
      <div className="modal-content">
        {/*Header*/}
        <div className="modal-header">
          <p className="heading lead">Feedback request
          </p>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true" className="white-text">×</span>
          </button>
        </div>
        {/*Body*/}
        <div className="modal-body">
          <div className="text-center">
            <i className="far fa-file-alt fa-4x mb-3 animated rotateIn" />
            <p>
              <strong>Your opinion matters</strong>
            </p>
            <p>Have some ideas how to improve our product?
              <strong>Give us your feedback.</strong>
            </p>
          </div>
          <hr />
          {/* Radio */}
          <p className="text-center">
            <strong>Your rating</strong>
          </p>
          <div className="form-check mb-4">
            <input className="form-check-input" name="group1" type="radio" id="radio-179" defaultValue="option1" defaultChecked />
            <label className="form-check-label" htmlFor="radio-179">Very good</label>
          </div>
          <div className="form-check mb-4">
            <input className="form-check-input" name="group1" type="radio" id="radio-279" defaultValue="option2" />
            <label className="form-check-label" htmlFor="radio-279">Good</label>
          </div>
          <div className="form-check mb-4">
            <input className="form-check-input" name="group1" type="radio" id="radio-379" defaultValue="option3" />
            <label className="form-check-label" htmlFor="radio-379">Mediocre</label>
          </div>
          <div className="form-check mb-4">
            <input className="form-check-input" name="group1" type="radio" id="radio-479" defaultValue="option4" />
            <label className="form-check-label" htmlFor="radio-479">Bad</label>
          </div>
          <div className="form-check mb-4">
            <input className="form-check-input" name="group1" type="radio" id="radio-579" defaultValue="option5" />
            <label className="form-check-label" htmlFor="radio-579">Very bad</label>
          </div>
          {/* Radio */}
          <p className="text-center">
            <strong>What could we improve?</strong>
          </p>
          {/*Basic textarea*/}
          <div className="md-form">
            <textarea type="text" id="form79textarea" className="md-textarea form-control" rows={3} defaultValue={""} />
            <label htmlFor="form79textarea">Your message</label>
          </div>
        </div>
        {/*Footer*/}
        <div className="modal-footer justify-content-center">
          <a type="button" className="btn btn-primary waves-effect waves-light">Send
            <i className="fa fa-paper-plane ml-1" />
          </a>
        <button>  <a type="button" className="btn btn-outline-primary waves-effect" data-dismiss="modal" onClick ={this.toggleModal}>Cancel</a></button>
        </div>
      </div>
    </div>
  </div>
  {/* Modal: modalPoll */}
</div>

            </div>
        );
    }
}

export default FeebackModal;