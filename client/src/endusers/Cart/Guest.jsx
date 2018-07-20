import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Email from '@material-ui/icons/Email';
import Label from '@material-ui/icons/Label';
import InputAdornment from '@material-ui/core/InputAdornment';
import { Typography } from 'material-ui';
import {Link} from 'react-router-dom';


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

   loginHandle = () => {
       
    console.log('email')
    console.log(this.state.email);
    console.log('password')
    console.log(this.state.password)

    var details = {
      'password': this.state.password,
      'email':this.state.email,
  
  };
  
  
  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
  
  
  fetch('/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
    },
    body: formBody
  }).then(res=>res.json())
  .then(res=>{
    console.log("we are in this function");
    console.log(res);
    if(res.msg==='Login Complete'){
      this.setState({
        name:res.username,
        id:res.userid,
      })
      let loginDetails = [];
      loginDetails.push(this.state.name);
      loginDetails.push(this.state.id);
      sessionStorage.setItem('LoginDetails',JSON.stringify(loginDetails));
      this.props.history.push('./home')
      window.location.reload();
     console.log(loginDetails);
     
    }
    else{
        console.log('Error')
    }
  }
  );
    this.setState({
        email:'',
        password:'',
       // name:this.props.name
    })
   }


   signUpHandle = () => {
       console.log('signup handle')
   }

   operationSignUp = () => {
    this.props.history.push('/signup');
  }

   changeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  changePassword = e => {
    this.setState({
      password: e.target.value
    });
}

  changeAddress = e => {
      this.setState({
          address:e.target.value
      })
  }
  changeContact = e => {
      this.setState({
          contact:e.target.value
      })
  }
  changeCreditCard = e => {
      this.setState({
            creditCard:e.target.value
      })
  }

  changeBankName = e => {
      this.setState({
          bankName:e.target.value
      })
  }

  confirmOrderGuest = () => {

  }

  confirmOrderMember = () => {

  }
  
  componentWillMount() {
    let loginDetails =  JSON.parse(sessionStorage.getItem('LoginDetails'));
    const { classes } = this.props;

    if(loginDetails===null){
        this.setState({
            display: <Grid container spacing={12}>
        <Grid item md={6}>
        <Card className={classes.left}>
         <CardContent>
               <Typography variant='display1'>Guest Information </Typography>
            </CardContent>
         <CardContent className={classes.cardcontent}>
        <TextField
          id="email"
          label="Email"
          placeholder="Enter Email"
          className={classes.textField}
          value={this.state.email}
          margin="normal"
          onChange={e => this.changeEmail(e)} 
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}               
        />
        <TextField
          id="contact"
          label="Contact"
          placeholder="Enter Contact"
          className={classes.textField}
          value={this.state.contact}
          margin="normal"
          onChange={e => this.changeContact(e)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Label />
              </InputAdornment>
            ),
          }}     
        />
            <TextField
          id="Address"
          label="Address"
          placeholder="Enter Address"
          className={classes.textField}
          value={this.state.address}
          margin="normal"
          onChange={e => this.changeAddress(e)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Label />
              </InputAdornment>
            ),
          }}     
        />
        </CardContent>
        <CardContent>
          <Link to='/signin'>Already a member?</Link>
          <Button onClick={this.confirmOrderGuest}>Confirm Order</Button>
          </CardContent>
        
        </Card>
        </Grid>
        <Grid item md={6}>
        <Card className={classes.right}>
        <CardContent>
               <Typography variant="display1"> Card Information </Typography>
            </CardContent>
            <CardContent>
            <TextField
                    id="creditcard"
                    label="Credit Card Number"
                    placeholder="Enter Credit Card Number"
                    className={classes.textField}
                    margin="normal"
                    value={this.state.creditCard}
                    onChange={e=>this.changeCreditCard(e)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
            
                        </InputAdornment>
                      ),
                    }}
                />
                <TextField
                    id="bankname"
                    label="Credit Bank Name"
                    placeholder="Enter Bank Name"
                    className={classes.textField}
                    margin="normal"
                    value={this.state.bankName}
                    onChange={e=>this.changeBankName(e)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          
                        </InputAdornment>
                      ),
                    }}
                />
            </CardContent>
            </Card>
        </Grid>
        </Grid>})
        }
        else if(loginDetails!=null){
            this.setState({
                display:<Grid container spacing={12}>
                <Grid item md={12}>
                    <Card>
                    <Typography variant='display1' color='primary'>Logged in As {loginDetails[0].toUpperCase()}</Typography>
                    <TextField
                      id="Address"
                      label="Address"
                      placeholder="Enter  another Address(Optional)"
                      className={classes.textField}
                      value={this.state.address}
                      margin="normal"
                      onChange={e => this.changeAddress(e)}
                      InputProps={{
                        startAdornment: (
                           <InputAdornment position="start">
                               <Label />
                            </InputAdornment>
                          ),
                        }}     
                      />
                    <Button onClick={this.confirmOrderMember}>Confirm Order</Button>
                    </Card>
                </Grid>
                    </Grid>
            })
        }
    }
  

    render() {      
        return (
            <div>
                {this.state.display}
                </div>
          );
        }
    }
  

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);