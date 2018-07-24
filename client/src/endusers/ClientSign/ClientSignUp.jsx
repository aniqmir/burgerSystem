import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import CreditCard from '@material-ui/icons/CreditCard';
import Email from '@material-ui/icons/Email';
import AccountBalance from '@material-ui/icons/AccountBalance';
import Phone from '@material-ui/icons/PermPhoneMsg';
import Label from '@material-ui/icons/Label';
import Check from '@material-ui/icons/Check';
import Accessibility from '@material-ui/icons/Accessibility';
import InputAdornment from '@material-ui/core/InputAdornment';
import Slide from '@material-ui/core/Slide';
import Footer from '../Footer/Footer'
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

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
    marginTop:'-15%',
    marginLeft:"5%",
    align:'center',
    paddingBottom:'5%'
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
    paddingBottom:'5%'
    //marginTop:'15%',
    //marginRight:'10%',
    //marginLeft:'10%'
  },
  icon:{
    opacity: '0.8',
    filter: 'alpha(opacity=60)', 
  },
  button : {
    backgroundColor:'white',
    color:"black",
    margin:'auto',
    align:'center',
    marginLeft:'45%',
    opacity: '0.8',
    filter: 'alpha(opacity=60)'
  },
 
 footer: {
    paddingTop:'3%'
 },
 divBackground:{
  backgroundImage:`url(${"https://www.xmple.com/wallpaper/stripes-orange-black-lines-streaks-1920x1080-c2-000000-ff8c00-l2-117-117-a-30-f-1.svg"})`,
  minHeight: '100vh',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  paddingTop:"15%"
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
            open:false,
            msg:'User Added',
            
        }
    }

   signUpHandle = () => {
       console.log('signup handle')
   }
  
   handleClose = () => {
    this.setState({
      open:false,
      msg:'User Added'
    })
  };

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
  var details = {
    'name': this.state.name,
    'password': this.state.password,
    'email':this.state.email,
    'address':this.state.address,

};



var formBody = [];
for (var property in details) {
  var encodedKey = encodeURIComponent(property);
  var encodedValue = encodeURIComponent(details[property]);
  formBody.push(encodedKey + "=" + encodedValue);
}
formBody = formBody.join("&");


fetch('/api/user/signup', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
  },
  body: formBody
  })
  .then(res=>res.json())
  .then(res=>{
    if(res){
    if(res.success===false)
    {
        this.setState({
          open:true,
          msg:res.msg,
        })
    }
    else {
      this.setState({
        open:true,
        msg:res.msg
      })
      this.props.history.push('./signin')
    }
    console.log(res);
    };
  }
  );
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
            <div className={classes.divBackground}>
                <Grid container spacing = {12}>
                    <Grid item md={6} sm={12} xs={12}>
                    <Slide direction="right" in={true} mountOnEnter unmountOnExit timeout={1000}>
                    <Card className={classes.transboxLeft} raised={true}>
                    <Grid container spacing = {12}>
                    <Grid item md={12} sm={12} xs={12}>
                    <CardContent>
                       <Typography variant='display1'>Personal Information<Accessibility/></Typography>
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
                            value={this.state.confirmpassword}
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
                    </Slide>
                    </Grid>
                    <Grid item md={6} sm={12} xs={12}>
                    <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={1000}>
                    <Card className={classes.transboxRight} raised={true}>
                    <CardContent>
                       <Typography variant="display1"> Card Information <CreditCard/> </Typography>
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
                    </Slide>
                    </Grid>
                    <Grid item md={12} sm={12} xs={12}>
                    <Slide direction="down" in={true} mountOnEnter unmountOnExit timeout={1200}>
                    <Button className={classes.button} size='large' onClick={this.enterDetails}>Enter <Check/></Button>
                    </Slide>
                    </Grid>
                </Grid>
                <div className={classes.footer}>
                   <Footer history={this.props.history}/>
                </div>
                <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
          ContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id="message-id">{this.state.msg}</span>}
          action={[
            <Button key="undo" color="secondary" size="small" onClick={this.handleClose}>
              UNDO
            </Button>,
            <IconButton
              key="close"
              aria-label="Close"
              color="inherit"
              className={classes.close}
              onClick={this.handleClose}
            >
              <CloseIcon />
            </IconButton>,
          ]}
        />
           </div>
          );
        }
    }
  

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);