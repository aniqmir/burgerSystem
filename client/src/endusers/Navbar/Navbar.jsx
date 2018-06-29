import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { MuiThemeProvider, createMuiTheme,withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Cart from '@material-ui/icons/AddShoppingCart';
import FastFood from '@material-ui/icons/Apps';
import Face from '@material-ui/icons/Face';
import {
  Link
  }   from 'react-router-dom';



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
             <Button color="inherit" onClick={this.operationSignIn.bind(this)}><Face/>&nbsp;Sign In</Button>
             <Button color="inherit"onClick={this.operationCart.bind(this)}><Cart/></Button>
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

