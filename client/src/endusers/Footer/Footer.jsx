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
                        <p><a href="http://">Contact Us</a></p>
                      </div>
                      <div className="row">
                        <p><a href="http://">Log in</a></p>
                      </div>
                      <div className="row">
                        <span><a href="http://">Log in</a></span>
                      </div>
                    </div>
                    <div className="col-sm-3"></div>
                    <div className="col-sm-3"></div>
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