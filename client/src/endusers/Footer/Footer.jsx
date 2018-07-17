import React from 'react';
import './footer.css';



class Footer extends React.Component {
  render() {
    return (
          <div className="main">
            <div className="container">
                  <div className="row">
                    <div className="col-sm-3">
                      <div className="row">
                        <h4>customer service</h4>
                      </div>
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
                          <h4>Top Cuisines</h4>
                        </div>
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
                          <h4>Locations</h4>
                        </div>
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
                      <div className="col-sm-3"></div>              
                  </div>
                  <hr/>
                  <div className="row">
                    <div className="col-sm-4">icons here</div>
                    <div className="col-sm-4">payment methods here</div>
                    <div className="col-sm-4">feedback here</div>
                  </div>
              </div>
          </div>
    );
  }
}

export default Footer;