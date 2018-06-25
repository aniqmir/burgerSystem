import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import CardHeader from 'material-ui';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CreditCard from '@material-ui/icons/CreditCard';
import Email from '@material-ui/icons/Email';
import AccountBalance from '@material-ui/icons/AccountBalance';
import Phone from '@material-ui/icons/PermPhoneMsg';
import Label from '@material-ui/icons/Label';
import Check from '@material-ui/icons/Check';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';


const styles = {
  card: {
      height:'100%',
      width:'100%'
   },
  media: {
    paddingTop:'50%'
  },
  textField: {
    margin:'auto',
    marginLeft:'5%',
    align:'center',
    width: '60%',
  },
  cardcontent:{
    marginTop:'20%',
  },
  buttonLogin: {
    marginTop:'3%',
    marginLeft:'25%'
  },
  buttonSignup: {
    marginTop:'3%',
  },
  divMargin: {
      marginTop:'5%',
      marginLeft:'10%',
      marginRight:'10%',
  },
  bgImage: {
   // backgroundImage:`url(${"https://imageresizer.static9.net.au/7PEZE_-FEeeife-33FAB3atcYaM=/1024x0/http%3A%2F%2Fprod.static9.net.au%2F_%2Fmedia%2FNetwork%2FImages%2F2017%2F06%2F16%2F09%2F55%2F170617coach_hot_chips.jpg"})`,
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
},
transboxLeft : {
    backgroundColor: '#ffffff',
    //border: '1px solid black',
    opacity: '0.8',
    filter: 'alpha(opacity=60)', /* For IE8 and earlier */
    margin:'10%',
    align:'center',
    //marginTop:'15%',
    //marginLeft:'10%',
  },
  transboxRight : {
    backgroundColor: '#ffffff',
    //border: '1px solid black',
    opacity: '0.8',
    filter: 'alpha(opacity=60)', /* For IE8 and earlier */
    margin:'10%',
    align:'center',
    //marginTop:'15%',
    //marginRight:'10%',
    //marginLeft:'10%'
  },
  icon:{
    opacity: '0.8',
    filter: 'alpha(opacity=60)', 
  },
  button : {
    backgroundColor:'black',
    color:"white",
    margin:'auto',
    align:'center',
    marginLeft:'45%'
  }
};

 class SimpleMediaCard extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            name:'',
            email:'',
            password:'',
            confirmpassword:'',
            address:'',
            contact:'',
            creditCard:'',
            bankName:'',
            
        }
    }

   signUpHandle = () => {
       console.log('signup handle')
   }
  
   changeName = e => {
    this.setState({
      name: e.target.value
    });
  };

   changeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  changePassword = e => {
    this.setState({
      password: e.target.value
    });
};

changeConfirmPassword = e => {
  this.setState({
    confirmpassword: e.target.value
  });
};


changeAddress = e => {
  this.setState({
    address: e.target.value
  });
};

changeContact = e => {
  this.setState({
    contact: e.target.value
  });
};

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

enterDetails = () => {
  console.log(this.state)
  
  this.setState({
    name:'',
    email:'',
    password:'',
    confirmpassword:'',
    address:'',
    contact:'',
    creditCard:'',
    bankName:''
  })
}

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.bgImage}>
                <Grid container spacing = {12}>
                    <Grid item md={6} sm={12} xs={12}>
                    <Card className={classes.transboxLeft} raised={true}>
                    <Grid container spacing = {12}>
                    <Grid item md={12} sm={12} xs={12}>
                    <CardContent>
                       <Typography variant='subheading'>Personal Information</Typography>
                    </CardContent>
                    <CardContent>
                    <TextField
                            id="name"
                            label="Name"
                            placeholder="Enter Name"
                            className={classes.textField}
                            margin="normal"
                            value={this.state.name}
                            onChange={e=>this.changeName(e)}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <AccountCircle className={classes.icon} />
                                </InputAdornment>
                              ),
                            }}
                     />
                        <TextField
                            id="Email"
                            label="Email"
                            placeholder="Enter Email"
                            className={classes.textField}
                            margin="normal"
                            value={this.state.email}
                            onChange={e=>this.changeEmail(e)}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Email/>
                                </InputAdornment>
                              ),
                            }}
                     />
                        <TextField
                            id="password"
                            label="Password"
                            placeholder="Enter Password"
                            type="password"
                            className={classes.textField}
                            margin="normal"
                            value={this.state.password}
                            onChange={e=>this.changePassword(e)}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Label/>
                                </InputAdornment>
                              ),
                            }}
                        />
                             <TextField
                            id="confirmpassword"
                            label="Confirm Password"
                            placeholder="Confirm Password"
                            type="password"
                            className={classes.textField}
                            margin="normal"
                            value={this.state.password}
                            onChange={e=>this.changeConfirmPassword(e)}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Label/>
                                </InputAdornment>
                              ),
                            }}
                        />
                        <TextField
                            id="address"
                            label="Address"
                            placeholder="Enter Address"
                            multiline
                            rowsMax="4"
                            value={this.state.address}
                            onChange={e=>this.changeAddress(e)}
                            className={classes.textField}
                            margin="normal"
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <AccountBalance/>
                                </InputAdornment>
                              ),
                            }}
                            />
                        <TextField
                            id="contact"
                            label="Contact"
                            placeholder="Enter Contact"
                            className={classes.textField}
                            margin="normal"
                            value={this.state.contact}
                            onChange={e=>this.changeContact(e)}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <Phone/>
                                </InputAdornment>
                              ),
                            }}
                        />
                    </CardContent>
                    </Grid>
                    </Grid>
                    </Card>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                    <Card className={classes.transboxRight} raised={true}>
                    <CardContent>
                        Card Information
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
                                  <CreditCard/>
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
                                  <AccountBalance/>
                                </InputAdornment>
                              ),
                            }}
                        />
                    </CardContent>
                    </Card>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12}>
                    <Button className={classes.button} size='large' onClick={this.enterDetails}>Enter <Check/></Button>
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