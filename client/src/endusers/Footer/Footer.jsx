import React from 'react';
//import './footer.css';
import 'font-awesome/css/font-awesome.min.css';


class Footer extends React.Component {
  render() {
    return (
          <div className="main">
            <div className="container">
                  <div className="row pt-5 pb-5">
                    <div className="col-sm-3">
                        <h5 className="pull head"><strong>Customer service</strong></h5>
                    </div>
                    <div className="col-sm-3">
                        <h5 className="pull head"><strong>Top Items</strong></h5>
                    </div>
                    <div className="col-sm-3">
                        <h5 className="pull head"><strong>Locations</strong></h5>
                    </div>
                    <div className="col-sm-3">
                        <h5 className="pull head"><strong>About us</strong></h5>
                    </div>
                  </div>
                  <div className="line pull"></div>
                  <div className="row pt-5 pb-5">
                    <div className="col-sm-3">
                      <div className="row">
                        <span><a href="http://">Contact Us</a></span>
                      </div>
                      <div className="row">
                        <span><a href="http://">Log in</a></span>
                      </div>
                      <div className="row">
                        <span><a href="http://">Sign up</a></span>
                      </div>
                      <div className="row">
                        <span><a href="http://">Blog</a></span>
                      </div>
                      <div className="row">
                        <span><a href="http://">Mobile Apps</a></span>
                      </div>
                      <div className="row">
                        <span><a href="http://">Suggest a restaurant</a></span>
                      </div>
                      <div className="row">
                        <span><a href="http://">Help</a></span>
                      </div>
                      <div className="row">
                        <span><a href="http://">My Account</a></span>
                      </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="row">
                          <span><a href="http://">Chinease</a></span>
                        </div>
                        <div className="row">
                          <span><a href="http://">Indian</a></span>
                        </div>
                        <div className="row">
                          <span><a href="http://">Italian</a></span>
                        </div>
                        <div className="row">
                          <span><a href="http://">Japnese</a></span>
                        </div>
                        <div className="row">
                          <span><a href="http://">Pizza Delivery</a></span>
                        </div>
                        <div className="row">
                          <span><a href="http://">View all Items</a></span>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="row">
                          <span><a href="http://">Birmingham</a></span>
                        </div>
                        <div className="row">
                          <span><a href="http://">Cardiff</a></span>
                        </div>
                        <div className="row">
                          <span><a href="http://">Glasgow</a></span>
                        </div>
                        <div className="row">
                          <span><a href="http://">Leeds</a></span>
                        </div>
                        <div className="row">
                          <span><a href="http://">Manchester</a></span>
                        </div>
                        <div className="row">
                          <span><a href="http://">View All locations</a></span>
                        </div>
                      </div>
                      <div className="col-sm-3">
                        <div className="row">
                          <span><a href="http://">Restaurant Sign up</a></span>
                        </div>
                        <div className="row">
                          <span><a href="http://">Price Promise</a></span>
                        </div>
                        <div className="row">
                          <span><a href="http://">Privacy Policy</a></span>
                        </div>
                        <div className="row">
                          <span><a href="http://">Terms &amp; Conditions</a></span>
                        </div>
                        <div className="row">
                          <span><a href="http://">Cookie Privacy</a></span>
                        </div>
                        <div className="row">
                          <span><a href="http://">About us</a></span>
                        </div>
                        <div className="row">
                          <span><a href="http://">Company Website</a></span>
                        </div>
                        <div className="row">
                          <span><a href="http://">Careers</a></span>
                        </div>
                        <div className="row">
                          <span><a href="http://">Modern Survery Statment</a></span>
                        </div>
                      </div>              
                  </div>
                  <div className="line pull"></div>
                  <div className="row pt-5">
                    <div className="col-sm-4">
                      <i className="fa fa-facebook fa-2x pr-3 head"></i>
                      <i className="fa fa-instagram fa-2x pr-3 head"></i>
                      <i className="fa fa-twitter fa-2x pr-3 head"></i>
                      <i className="fa fa-youtube fa-2x pr-3 head"></i>
                      <i className="fa fa-at fa-2x pr-3"></i>
                    </div>
                    <div className="col-sm-4">
                      <img src={'./je-payment-logos-amex.png'} className="payment-method pr-4" alt="mastercard" srcset=""/>
                      <img src={'./je-payment-logos-visa.png'} className="payment-method pr-4" alt="mastercard" srcset=""/>
                      <img src={'./je-payment-logos-mastercard.png'} className="payment-method pr-4" alt="mastercard" srcset=""/>
                    </div>
                    <div className="col-sm-4">
                      <div className="text-center">
                        <i className="fa fa-comments fa-2x pr-3 head"></i>
                        <strong className="head">Feedback</strong>
                        <a> <small className="block"><strong>Help us</strong> improve our Website!</small>
                          </a>
                      </div>
                    </div>
                  </div>
              </div>
          </div>
    );
  }
}

export default Footer;