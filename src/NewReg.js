import React, { Component } from 'react';

class NewReg extends Component {
    render() {
        return (
            <div>
                <div>
                  <link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
  integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
  crossorigin="anonymous"
/>
  <meta charSet="utf-8" />
  <link rel="apple-touch-icon" sizes="76x76" href="/new/assets/img/apple-icon.png" />
  <link rel="icon" type="image/png" href="/new/assets/img/favicon.png" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
  <title>Get Shit Done Bootstrap Wizard by Creative Tim</title>
  <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
  <meta name="viewport" content="width=device-width" />
  {/*     Fonts and icons     */}
  <link href="http://netdna.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.css" rel="stylesheet" />
  {/* CSS Files */}
  <link href="/new/assets/css/bootstrap.min.css" rel="stylesheet" />
  <link href="/new/assets/css/gsdk-bootstrap-wizard.css" rel="stylesheet" />
  {/* CSS Just for demo purpose, don't include it in your project */}
  <link href="/new/assets/css/demo.css" rel="stylesheet" />
  <div className="image-container set-full-height" style={{backgroundImage: 'url("/new/assets/img/wizard.jpg")'}}>
    {/*   Creative Tim Branding   */}
    <a href="http://creative-tim.com">
      <div className="logo-container">
        <div className="logo">
          <img src="/new/assets/img/new_logo.png" />
        </div>
        <div className="brand">
          Creative Tim
        </div>
      </div>
    </a>
    {/*  Made With Get Shit Done Kit  */}
    <a href="http://demos.creative-tim.com/get-shit-done/index.html?ref=get-shit-done-bootstrap-wizard" className="made-with-mk">
      <div className="brand">GK</div>
      <div className="made-with">Made with <strong>GSDK</strong></div>
    </a>
    {/*   Big container   */}
    <div className="container">
      <div className="row">
        <div className="col-sm-8 col-sm-offset-2">
          {/*      Wizard container        */}
          <div className="wizard-container">
            <div className="card wizard-card" data-color="orange" id="wizardProfile">
              <form action method>
                {/*        You can switch ' data-color="orange" '  with one of the next bright colors: "blue", "green", "orange", "red"          */}
                <div className="wizard-header">
                  <h3>
                    <b>BUILD</b> YOUR PROFILE <br />
                    <small>This information will let us know more about you.</small>
                  </h3>
                </div>
                <div className="wizard-navigation">
                <ul>
                    <li><a href="#about" data-toggle="tab">About</a></li>
                    <li><a href="#account" data-toggle="tab">Account</a></li>
                    <li><a href="#address" data-toggle="tab">Address</a></li>
                  </ul>
                </div>
                <div className="tab-content">
                  <div className="tab-pane" id="about">
                    <div className="row">
                      <h4 className="info-text"> Let's start with the basic information (with validation)</h4>
                      <div className="col-sm-4 col-sm-offset-1">
                        <div className="picture-container">
                          <div className="picture">
                            <img src="/new/assets/img/default-avatar.png" className="picture-src" id="wizardPicturePreview" title />
                            <input type="file" id="wizard-picture" />
                          </div>
                          <h6>Choose Picture</h6>
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="form-group">
                          <label>First Name <small>(required)</small></label>
                          <input name="firstname" type="text" className="form-control" placeholder="Andrew..." />
                        </div>
                        <div className="form-group">
                          <label>Last Name <small>(required)</small></label>
                          <input name="lastname" type="text" className="form-control" placeholder="Smith..." />
                        </div>
                      </div>
                      <div className="col-sm-10 col-sm-offset-1">
                        <div className="form-group">
                          <label>Email <small>(required)</small></label>
                          <input name="email" type="email" className="form-control" placeholder="andrew@creative-tim.com" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="account">
                    <h4 className="info-text"> What are you doing? (checkboxes) </h4>
                    <div className="row">
                      <div className="col-sm-10 col-sm-offset-1">
                        <div className="col-sm-4">
                          <div className="choice" data-toggle="wizard-checkbox">
                            <input type="checkbox" name="jobb" defaultValue="Design" />
                            <div className="icon">
                              <i className="fa fa-pencil" />
                            </div>
                            <h6>Design</h6>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="choice" data-toggle="wizard-checkbox">
                            <input type="checkbox" name="jobb" defaultValue="Code" />
                            <div className="icon">
                              <i className="fa fa-terminal" />
                            </div>
                            <h6>Code</h6>
                          </div>
                        </div>
                        <div className="col-sm-4">
                          <div className="choice" data-toggle="wizard-checkbox">
                            <input type="checkbox" name="jobb" defaultValue="Develop" />
                            <div className="icon">
                              <i className="fa fa-laptop" />
                            </div>
                            <h6>Develop</h6>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane" id="address">
                    <div className="row">
                      <div className="col-sm-12">
                        <h4 className="info-text"> Are you living in a nice area? </h4>
                      </div>
                      <div className="col-sm-7 col-sm-offset-1">
                        <div className="form-group">
                          <label>Street Name</label>
                          <input type="text" className="form-control" placeholder="5h Avenue" />
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="form-group">
                          <label>Street Number</label>
                          <input type="text" className="form-control" placeholder={242} />
                        </div>
                      </div>
                      <div className="col-sm-5 col-sm-offset-1">
                        <div className="form-group">
                          <label>City</label>
                          <input type="text" className="form-control" placeholder="New York..." />
                        </div>
                      </div>
                      <div className="col-sm-5">
                        <div className="form-group">
                          <label>Country</label><br />
                          <select name="country" className="form-control">
                            <option value="Afghanistan"> Afghanistan </option>
                            <option value="Albania"> Albania </option>
                            <option value="Algeria"> Algeria </option>
                            <option value="American Samoa"> American Samoa </option>
                            <option value="Andorra"> Andorra </option>
                            <option value="Angola"> Angola </option>
                            <option value="Anguilla"> Anguilla </option>
                            <option value="Antarctica"> Antarctica </option>
                            <option value="...">...</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="wizard-footer height-wizard">
                  <div className="pull-right">
                    <input type="button" className="btn btn-next btn-fill btn-warning btn-wd btn-sm" name="next" defaultValue="Next" />
                    <input type="button" className="btn btn-finish btn-fill btn-warning btn-wd btn-sm" name="finish" defaultValue="Finish" />
                  </div>
                  <div className="pull-left">
                    <input type="button" className="btn btn-previous btn-fill btn-default btn-wd btn-sm" name="previous" defaultValue="Previous" />
                  </div>
                  <div className="clearfix" />
                </div>
              </form>
            </div>
          </div> {/* wizard container */}
        </div>
      </div>{/* end row */}
    </div> {/*  big container */}
    <div className="footer">
      <div className="container">
        Made with <i className="fa fa-heart heart" /> by <a href="http://www.creative-tim.com">Creative Tim</a>. Free download <a href="http://www.creative-tim.com/product/bootstrap-wizard">here.</a>
      </div>
    </div>
  </div>
  {/*   Core JS Files   */}
  {/*  Plugin for the Wizard */}
  {/*  More information about jquery.validate here: http://jqueryvalidation.org/	 */}
</div>

            </div>
        );
    }
}

export default NewReg;