import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Email from '@material-ui/icons/Email';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Typography } from 'material-ui';
import urlBase64ToUint8Array from 'url-base64-to-uint8array';
import StripeCheckout from './StripeCheckout';

const styles = {
  card: {
    opacity: '0.8',
    filter: 'alpha(opacity=60)', 
   },

  textField: {
    margin:'auto',
    marginLeft:'5%',
    align:'center',
    width: '85%',
  },
  cardcontent:{
    marginTop:'0%',
  },
  buttonLogin: {
    marginTop:'3%',
    marginLeft:'25%'
  },
  buttonSignup: {
    marginTop:'3%',
  },
  divBackground:{
    backgroundImage:`url(${"https://www.xmple.com/wallpaper/stripes-orange-black-lines-streaks-1920x1080-c2-000000-ff8c00-l2-117-117-a-30-f-1.svg"})`,
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingTop:"15%"
  },
  footer:{
    paddingTop:"5%"
  }
};
function askPermission() {
  return new Promise(function(resolve, reject) {
    const permissionResult = Notification.requestPermission(function(result) {
    resolve(result);
    });
    if (permissionResult) {
      permissionResult.then(resolve, reject);
    }
  })
  .then(function(permissionResult) {
    if (permissionResult !== 'granted') {
      throw new Error('We weren\'t granted permission.');
    }
  });
}

 class SimpleMediaCard extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            email:'',
            contact:'',
            address:'HY',
            creditCard:'',
            bankName:'',
            display:<div></div>
            
        }
        if (!('serviceWorker' in navigator)) {
          console.log('Service Worker isnt supported on this browser, disable or hide UI');
          return;
        }
        
        if (!('PushManager' in window)) {
          console.log('Push isnt supported on this browser, disable or hide UI');
          return;
        }
        askPermission();
        this.subscribeUserToPush = this.subscribeUserToPush.bind(this);
      }
    changeAddress = e => {
      this.setState({
        address: e.target.value
      });
    }
    sendSubscriptionToBackEnd = (subscription) => {
      console.log('HERE',this.state.address,JSON.stringify(subscription));
      return fetch('/api/user/placeorder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: [JSON.stringify(subscription),this.state.address]
      })
      .then(function(response) {
        if (!response.ok) {
          throw new Error('Bad status code from server.');
        }
    
        return response.json();
      })
      .then(function(responseData) {
        if (!(responseData.data && responseData.data.success)) {
          throw new Error('Bad response from server.');
        }
      });
    } 
    subscribeUserToPush = () => {
      console.log('testing2',this.state.address)
      navigator.serviceWorker.register('sw.js')
      .then(function(registration) {
        console.log('serviceworker registred successsfully');
        const subscribeOptions = {
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(
            'BK7j6oEXJUWtmBaMFBSuxST1b5aLCXIZ77wOQtt1BleyrcpwU9zkvysq1TOnFHDqjvyLNE-9m1u37ttKfzKYk8Q')
        };
        console.log('testing',this.state.address)
        return registration.pushManager.subscribe(subscribeOptions);
      })
      .then(function (pushSubscription) {
        console.log('Received Push Subscription:', JSON.stringify(pushSubscription));
        this.sendSubscriptionToBackEnd(pushSubscription);
        return pushSubscription;
      });
    }

  confirmOrderGuest = () => {
     console.log('we are here');
  }
  confirmOrderMember = () => {
    this.subscribeUserToPush()
  }
    render() {      
      let loginDetails =  JSON.parse(sessionStorage.getItem('LoginDetails'));
      if(loginDetails===null){
        loginDetails=['NONE']
      }
      const { classes } = this.props;
        return (
            <div> 
                <Grid containcer spacing={12}>
                <Grid item md={12}>
                    <Card>
                    <Typography variant='display1' color='primary'>Logged in As {loginDetails[0].toUpperCase()}</Typography>
                    <TextField
                            id="Address"
                            label="Address"
                            placeholder="Enter Address (optional)"
                            className={classes.textField}
                            margin="normal"
                            value={this.state.address}
                            onChange={e=>this.changeAddress(e)}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Email/>
                                </InputAdornment>
                              ),
                            }}
                     />
                    <Button onClick={this.confirmOrderMember}>Confirm Order</Button>
                    </Card>
                    <StripeCheckout
                        name={'The Road to learn React'}
                        description={'Only the Book'}
                        amount={1}
                      />
                </Grid>
                    </Grid>
                </div>
          );
        }
    }
  

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);