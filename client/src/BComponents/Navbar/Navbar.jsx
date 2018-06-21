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
import Cart from '../Cart/Cart';


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
 } })

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};




class ButtonAppBar extends React.Component {
 
  
operationHome = () => {
    this.props.history.push('/home');
}

operationLandingPage = () => {
  this.props.history.push('/');
}

render() {
    const { classes } = this.props;
    return (
        <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <AppBar color="primary" position="sticky">
            <Toolbar >
              <Typography variant="title" color="primary" className={classes.flex}>
                <Button className={classes.flex} onClick={this.operationLandingPage.bind(this)}>Burger</Button>
              </Typography>
              <Button color="inherit" onClick={this.operationHome.bind(this)}>Items</Button>
             {/* <IconButton color="inherit"onClick={this.operationCart.bind(this)}><Cart/></IconButton> */} 
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

