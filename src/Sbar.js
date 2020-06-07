import React, { Component } from 'react';
import './bar.css'
class Sbar extends Component {
    render() {
        return (
            <div>
<div>
  <link href="//netdna.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
  {/*---- script --------*/}
  {/*---- Include the above in your HEAD tag --------*/}
  <div className="container">
    <div className="row">
      <div className="col-md-4 col-md-offset-3">
        <form action className="search-form">
          <div className="form-group has-feedback">
            <label htmlFor="search" className="sr-only">Search</label>
            <input type="text" className="form-control" name="search" id="search" placeholder="search" />
            <span className="glyphicon glyphicon-search form-control-feedback" />
          </div>
        </form>
      </div>
    </div>
  </div>
</div>

            </div>
        );
    }
}

export default Sbar;