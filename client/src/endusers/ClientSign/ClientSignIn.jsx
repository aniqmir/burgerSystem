import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Email from '@material-ui/icons/Email';
import Label from '@material-ui/icons/Label';
import Check from '@material-ui/icons/Check';
import Face from '@material-ui/icons/Face';
import InputAdornment from '@material-ui/core/InputAdornment';
import Slide from '@material-ui/core/Slide';
import Footer from '../Footer/Footer';


const styles = {
  card: {
    opacity: '0.8',
    filter: 'alpha(opacity=60)', 
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
    width: '85%',
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
     // marginTop:'5%',
      //marginLeft:'10%',
      //marginRight:'10%',
      marginLeft:'2%',
      marginRight:'2%',
      marginBottom:'2%',
      marginTop:'-10%'
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
            password:'',
            name:this.props.name,
            id:'',
            
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
      let check = JSON.parse(localStorage.getItem('cartItems'))
      if(check===null)
      {this.props.history.push('/home');
      window.location.reload();
      }
      else if(check!=null){
        this.props.history.push('/checkout');
        window.location.reload();
      }
      
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
};


    render() {
        const { classes } = this.props;
        
        return (
            <div className={classes.divBackground}>
            <div className={classes.divMargin}>
            
                <Grid container spacing={12}>
                <Grid item md={8} sm={12} xs={12}>
                <Slide direction="right" in={true} mountOnEnter unmountOnExit timeout={1000}>
                 <Card raised={true}>
                 <CardMedia className={classes.media}
                image="https://static.olocdn.net/menu/applebees/c667aa8060427981c4a8d79502fda788.jpg"/>
                </Card>
                </Slide>
                </Grid>
              
            
                <Grid item md={4} sm={12} xs={12} >
                <Slide direction="left" in={true} mountOnEnter unmountOnExit timeout={1000}>
                <Card className={classes.card} raised={true}>
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
                  id="password"
                  label="Password"
                  placeholder="Enter Password"
                  type="password"
                  className={classes.textField}
                  value={this.state.password}
                  margin="normal"
                  onChange={e => this.changePassword(e)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Label />
                      </InputAdornment>
                    ),
                  }}     
                />
                </CardContent>
                <CardActions>
                    <Grid container spacing ={12}>
                    <Grid item md={6} sm={6} xs={6}>
                    <Slide direction="down" in={true} mountOnEnter unmountOnExit timeout={1400}>
                    <Button size="medium" onClick={this.loginHandle} className={classes.buttonLogin}>
                    Login <Face/>
                    </Button>
                    </Slide>
                  </Grid>
                  <Grid item md={6} sm={6} xs={6}>
                  <Slide direction="up" in={true} mountOnEnter unmountOnExit timeout={1400}>
                <Button size="medium" onClick={this.operationSignUp} className={classes.buttonSignup}>
                    Sign Up <Check/>
                  </Button>
                  </Slide>
                  </Grid>
                  </Grid>
                </CardActions>
                 </Card>
                 </Slide>
                 </Grid>
                 </Grid>
            </div>
                 <div className={classes.footer}>
                  <Footer history={this.props.history}/>
                 </div>
          </div>  
          );
        }
    }
  

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);