import React, { Component } from 'react';
import { Carousel, CarouselCaption, CarouselControl, CarouselInner, CarouselItem, CarouselIndicators, CarouselIndicator, View, Mask } from 'mdbreact';
import './landingPage.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class CarouselPage extends Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.state = {
      activeItem: 1,
      maxLength: 4
    };
  }

  next() {
    let nextItem = this.state.activeItem + 1;
    if(nextItem > this.state.maxLength) {
      this.setState({ activeItem: 1 });
    } else {
      this.setState({ activeItem: nextItem });
    }
  }

  prev() {
    let prevItem = this.state.activeItem - 1;
    if(prevItem < 1) {
      this.setState({ activeItem: this.state.maxLength });
    } else {
      this.setState({ activeItem: prevItem });
    }
  }

  goToIndex(item) {
    if (this.state.activeItem !== item) {
      this.setState({
        activeItem: item
      });
    }
  }

  render(){
    return(
      <div>

        <div className="bg">
        <Carousel 
          activeItem={this.state.activeItem}
          next={this.next}
          className="z-depth-1" 
          >
          <CarouselInner>
            <CarouselItem itemId="1">
              <View>
                <img className="d-block w-100 bg" src="http://www.readersdigest.ca/wp-content/uploads/2015/11/gourmet-burger.jpg" alt="First slide" />
                <Mask overlay="black-light"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">Light mask</h3>
                <p>First text</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="2">
              <View>
                <img className="d-block w-100 bg" src="https://brooksburger.com/images/bg5.jpg" alt="Second slide" />
                <Mask overlay="black-strong"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">Strong mask</h3>
                <p>Second text</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="3">
              <View>
                <img className="d-block w-100 bg" src="https://cdn.shopify.com/s/files/1/2265/8367/products/Bison_Burgers_530x@2x.jpg?v=1506033346" alt="Third slide" />
                <Mask overlay="black-slight"></Mask>
              </View>
              <CarouselCaption>
                <h3 className="h3-responsive">Slight mask</h3>
                <p>Third text</p>
              </CarouselCaption>
            </CarouselItem>
            <CarouselItem itemId="4">
              <View>
                <img className="d-block w-100 bg" src="http://www.craftlakewood.com/images/slideshow/craft-slide.jpg" alt="Mattonit's item" />
                <Mask overlay="black-light"></Mask>
              </View>
            </CarouselItem>
          </CarouselInner>
        </Carousel>        
        </div>


        <div className="row">
          <div className="container">
        {/* title para */}
            <div className="row pt-5">
              <div className="col-sm-12">
                <h1 className="text-center">
                  Delivery Service
                </h1>
                <p className="pt-3">
                Beat the Monday blues with the promise of a freshly-prepared GAIL’s breakfast at your morning meeting.
                By the time you’re on your commute, the team at our bakeries in Seymour Place and Soho have already been up for hours kneading perfectly-formed mini loaves for our sharing sandwich platters and shaping delicate mini pastries, ready for delivery by courier to local businesses and corporate head offices in the area.
                Whether it’s for a breakfast meeting or a working lunch, GAIL’s covers all your catering needs with a variety of wholesome options from healthy vegan and gluten-free salads to platters of mini sandwiches, sweets and savouries.
                Simply fill your basket and order online by midday for next-day delivery from as early as 7:30am.

                </p>
              </div>
            </div>

        {/* Steps section */}
            <div className="row pt-5">
                 
              <div className="col-sm-4">
                <div className="box text-center">
                  <h5 className="maron">
                    Step 1
                  </h5>
                  <h3>
                    BROWSE OUR MENU
                  </h3>
                  <small>
                  Our mini sandwiches, savouries and sweet bites, as well as sharing salads are perfect for meetings and events.
                  </small>
                </div>
              </div>  
              <div className="col-sm-4">
                <div className="box text-center">
                  <h5 className="maron">
                    Step 2
                  </h5>
                  <h3>
                    ADD ITEMS TO CART
                  </h3>
                  <small>
                    Select items from our menu &amp; add them to cart to continue.
                  </small>
                </div>
              </div>  
              <div className="col-sm-4">
                <div className="box text-center">
                  <h5 className="maron">
                    Step 3
                  </h5>
                  <h3>
                    FILL DELIVERY DETAILS
                  </h3>
                  <small>
                    Fill your delivery details and click on checkout for delivery.
                  </small>
                </div>
              </div>  
            </div>
          </div>
        </div>
        </div>
    );
  }
}

export default CarouselPage;
                