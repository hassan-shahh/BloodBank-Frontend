import React, { Component } from 'react';

class NewSign extends Component {
    render() {
        return (
            <div>
                <div>
  {/* SITE TITTLE */}
  <meta charSet="utf-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Small Apps</title>
  {/* PLUGINS CSS STYLE */}
  {/* Bootstrap */}
  <link href="yes/plugins/bootstrap/bootstrap.min.css" rel="stylesheet" />
  {/* themify icon */}
  <link rel="stylesheet" href="yes/plugins/themify-icons/themify-icons.css" />
  {/* Owl Carousel */}
  <link href="yes/plugins/owl-carousel/assets/owl.carousel.min.css" rel="stylesheet" media="screen" />
  {/* Owl Carousel Theme */}
  <link href="yes/plugins/owl-carousel/assets/owl.theme.green.min.css" rel="stylesheet" media="screen" />
  {/* Fancy Box */}
  <link href="yes/plugins/fancybox/jquery.fancybox.min.css" rel="stylesheet" />
  {/* AOS */}
  <link rel="stylesheet" href="yes/plugins/aos/aos.css" />
  {/* CUSTOM CSS */}
  <link href="yes/css/style.css" rel="stylesheet" />
  {/* FAVICON */}
  <link href="yes/images/favicon.png" rel="shortcut icon" />
  {/*=============================
=            Sign Up            =
==============================*/}
  <section className="user-login section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="block">
            {/* Image */}
            <div className="image align-self-center"><img className= 'img-fluid' src="yes/images/Login/pp.jpg" alt="desk-image" /></div>
            {/* Content */}
            <div className="content text-center">
              <div className="logo">
                <a href="yes/homepage.html"><img src="images/n.jpg" alt="" /></a>
              </div>
              <div className="title-text">
                <h3>Sign Up for New Account</h3>
              </div>
              <form action="#">
                {/* Username */}
                <input className="form-control main" type="text" placeholder="Your Name" />
                {/* Email */}
                <input className="form-control main" type="email" placeholder="Email Address" />
                {/* Password */}
                <input className="form-control main" type="password" placeholder="Password" />
                <input className="form-control main" type="Address" placeholder="Your Address" />
                <input className="form-control main" type="Age" placeholder="Your Age" />
                <form action="/action_page.php">
    
                </form >
              <p style={{"text-align": "left"}} >Please select your gender:</p>
 <input type="radio" id="male" name="gender" defaultValue="male" style={{"marginLeft": "___ set according to the page"}} />
  <label htmlFor="male" >Male &nbsp; &nbsp;&nbsp;</label>
	
  <input type="radio" id="female" name="gender" defaultValue="female" />
  <label htmlFor="female"  >Female</label><br></br>

</form>
                {/* Submit Button */}
                <button className="btn btn-main-md">sign up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  </section>
  {/*====  End of Sign Up  ====*/}
  {/* JAVASCRIPTS */}
  {/* google map */}
</div>

            </div>
        );
    }
}

export default NewSign;