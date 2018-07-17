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
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Pizza from '@material-ui/icons/SettingsInputSvideo'
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
  badge:0,
  openMenu:false,
  anchorEl: null,
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

 openMenu = event => {
   this.setState({
    anchorEl: event.currentTarget
   })
 }
 closeMenu = () => {
  this.setState({
   anchorEl:null
  })
}

openAll = () => {
  this.props.history.push('/home')
}

openBurger = () => {
  this.props.history.push('/burger');
}

openPizza = () => {
  this.props.history.push('/pizza');
}

openFreshnaankabaabs = () => {
  this.props.history.push('/freshnaankababs');
}
openSouthernFriedChicken = () => {
  this.props.history.push('/southernfriedchicken');
}
openWraps = () => {
  this.props.history.push('/wraps');
}
openPanini = () => {
  this.props.history.push('/panini');
}
openPeriPeriChicken = () => {
  this.props.history.push('/periperichicken');
}
openFishandChips = () => {
  this.props.history.push('/fishandchips');
}
openDonnerKabbas = () => {
  this.props.history.push('/donnerkababs');
}
openHotbites = () => {
  this.props.history.push('/hotbites');
}
openVegetarian = () => {
  this.props.history.push('/vegetarian');
}
opendeserts = () => {
  this.props.history.push('/deserts');
}
openSauces = () => {
  this.props.history.push('/sauces');
}
openColdDrinks = () => {
  this.props.history.push('/colddrinks')
}
render() {
    const { classes } = this.props;
    return (
        <MuiThemeProvider theme={theme}>
        <ClickAwayListener onClickAway={this.closeMenu}>
        <div className={classes.root}>
          <AppBar color="primary" position="sticky">
            <Toolbar >
              <Typography variant="title" color="primary" className={classes.flex}>
                <Button className={classes.flex} onClick={this.operationLandingPage.bind(this)}></Button>
              </Typography>
              <div>
              <Button color="inherit">About US</Button>
              <Button color="inherit" onClick={this.openMenu}><FastFood/>&nbsp;Food&nbsp; &&nbsp; Drinks</Button>
              
        <Menu
          aria-owns={this.state.anchorEl ? 'simple-menu' : null}
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={Boolean(this.state.anchorEl)}
        >
          <MenuItem onClick={this.openAll}>All</MenuItem>
          <MenuItem onClick={this.openPizza}><h4><Pizza/>&nbsp;Pizza</h4></MenuItem>
          <MenuItem onClick={this.openBurger}><h4><Pizza/>&nbsp;Burger</h4></MenuItem>
          <MenuItem onClick={this.openFreshnaankabaabs}><h4><Pizza/>&nbsp;Fresh Naan Kabaabs</h4></MenuItem>
          <MenuItem onClick={this.openSouthernFriedChicken}><h4><Pizza/>&nbsp;Souther Fried Chicken</h4></MenuItem>
          <MenuItem onClick={this.openWraps}><h4><Pizza/>&nbsp;Wraps</h4></MenuItem>
          <MenuItem onClick={this.openPanini}><h4><Pizza/>&nbsp;Panini</h4></MenuItem>
          <MenuItem onClick={this.openPeriPeriChicken}><h4><Pizza/>&nbsp;PeriPeriChicken</h4></MenuItem>
          <MenuItem onClick={this.openFishandChips}><h4><Pizza/>&nbsp;Fish and Chips</h4></MenuItem>
          <MenuItem onClick={this.openDonnerKabbas}><h4><Pizza/>&nbsp;Donner Kabbas</h4></MenuItem>
          <MenuItem onClick={this.openHotbites}><h4><Pizza/>&nbsp;Hotbites</h4></MenuItem>
          <MenuItem onClick={this.openVegetarian}><h4><Pizza/>&nbsp;Vegetarian</h4></MenuItem>
          <MenuItem onClick={this.opendeserts}><h4><Pizza/>&nbsp;Deserts</h4></MenuItem>
          <MenuItem onClick={this.openSauces}><h4><Pizza/>&nbsp;Sauces</h4></MenuItem>
          <MenuItem onClick={this.openColdDrinks}><h4><Pizza/>&nbsp;ColdDrinks</h4></MenuItem>
         
        </Menu>
        
      </div>
            <Button color="inherit" onClick={this.operationSignIn.bind(this)} disabled={this.state.check}><Face/>&nbsp; {this.state.username}</Button>
           {/*<Link to={ {pathname:'signin', state:{func:true}}}><Face/>&nbsp; {this.state.username}</Link>*/} 
             <Button color="inherit" onClick={this.operationLogout.bind(this)} disabled={!this.state.check}>{this.state.logout}</Button> 
             <Button color="inherit"onClick={this.operationCart.bind(this)}><Badge  badgeContent={this.state.badge} color="secondary"><Cart/></Badge></Button>
            </Toolbar>
          </AppBar>
        </div>
        </ClickAwayListener>
        </MuiThemeProvider>
      );
}
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar)

