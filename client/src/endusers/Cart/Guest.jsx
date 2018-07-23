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
 

 class SimpleMediaCard extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            email:'',
            contact:'',
            address:'',
            creditCard:'',
            bankName:'',
            display:<div></div>
            
        }
    }
    changeAddress = e => {
      this.setState({
        address: e.target.value
      });
    };

  confirmOrderGuest = () => {

  }

  confirmOrderMember = () => {

  }
  

    render() {      
      let loginDetails =  JSON.parse(sessionStorage.getItem('LoginDetails'));
      if(loginDetails===null){
        loginDetails=['NONE']
      }
      const { classes } = this.props;
        return (
            <div>
                <Grid container spacing={12}>
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