import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme,withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Cart from '@material-ui/icons/AddShoppingCart';
import FastFood from '@material-ui/icons/Apps';
import Face from '@material-ui/icons/Face';
import Badge from '@material-ui/core/Badge';
import _ from 'lodash';
//import {Link} from 'react-router-dom';


const theme = createMuiTheme ({
    palette: {
        primary:{
            light:'#FAFAFA',
            main:'#FAFAFA',
            dark:'#FAFAFA',
        },
        secondary: {
          light:'#212121',
          main:'#212121',
          dark:'#212121',
        },
        error:red,
        contrastThreshold: 3,
        tonalOffset: 0.2,
 },
 typography: {
  // Use the system font instead of the default Roboto font.
  fontFamily: [
    'Bangers'
  ].join(','),
} })

const styles = {
  root: {
    flexGrow: 1,
    opacity:1
  },
  flex: {
    flex: 1,
    backgroundImage:`url(${"./logo1.png"})`,
    backgroundSize:'105px',
    backgroundRepeat: 'no-repeat',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  logo: {
    backgroundImage:`url(${"./logo1.png"})`,
    
   // backgroundSize: '100%',
    //background:'linear-gradient(-180deg, red, yellow)'
}
  
};




class ButtonAppBar extends React.Component {
 
  
operationHome = () => {
    this.props.history.push('/home');
}

operationLandingPage = () => {
  this.props.history.push('/');
}

operationCart = () => {
  this.props.history.push('/cart');
}

operationSignIn = () => {
  this.props.history.push('/signin');
}
operationSearch = () => {
  this.props.history.push('/search');
}

operationLogout = () => {
  console.log('logout')
  sessionStorage.setItem("LoginDetails",null);
  this.setState({
    username:'Sign In',
    check:false,
    logout:''
  })
  window.location.reload();
}

state = {
  username : 'Sign In',
  check : false,
  logout:'',
  badge:0
}
componentWillMount(){
  let cartItem = JSON.parse(localStorage.getItem('cartItems'));
   cartItem = _.uniqWith(cartItem,_.isEqual);
  let temp = null;
  if(cartItem===null){
    temp=null
  }
  else{
    temp=cartItem.length
  }
  if(temp===null){
    this.setState({
      badge:0
    })
  }
  else{
  this.setState({
    badge:temp,
})
  }
 
}

componentDidMount() {
 let loginDetails =  JSON.parse(sessionStorage.getItem('LoginDetails'));
 console.log(loginDetails);
 if(loginDetails != null) {
 this.setState({
      username : loginDetails[0],
      check:true,
      logout:'Log Out'
 })
}
 else {
   this.setState({
     username:'Sign IN',
     check:false,
     logout:''
   })
 }
 
}

componentWillUnmount() {
  let loginDetails =  JSON.parse(sessionStorage.getItem('LoginDetails'));

  console.log(loginDetails);
  if(loginDetails != null) {
  this.setState({
       username : loginDetails[0],
       check:true,
       logout:'Log Out',
  })
 }
  else {
    this.setState({
      username:'Sign IN',
      check:false,
      logout:'',
    })
  }
 }

render() {
    const { classes } = this.props;
    return (
        <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <AppBar color="primary" position="sticky">
            <Toolbar >
              <Typography variant="title" color="primary" className={classes.flex}>
                <Button className={classes.flex} onClick={this.operationLandingPage.bind(this)}></Button>
              </Typography>
              <Button color="inherit" onClick={this.operationHome.bind(this)}><FastFood/>&nbsp;Items</Button>
            <Button color="inherit" onClick={this.operationSignIn.bind(this)} disabled={this.state.check}><Face/>&nbsp; {this.state.username}</Button>
           {/*<Link to={ {pathname:'signin', state:{func:true}}}><Face/>&nbsp; {this.state.username}</Link>*/} 
             <Button color="inherit" onClick={this.operationLogout.bind(this)} disabled={!this.state.check}>{this.state.logout}</Button> 
             <Button color="inherit"onClick={this.operationCart.bind(this)}><Badge  badgeContent={this.state.badge} color="secondary"><Cart/></Badge></Button>
             
             {/*<Button color="inherit"onClick={this.operationSearch.bind(this)}>Search</Button>*/}  
            
            </Toolbar>
          </AppBar>
        </div>
     
        </MuiThemeProvider>
      );
}
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);

