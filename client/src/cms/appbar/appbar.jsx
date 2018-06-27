import React from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import AppBar from 'material-ui/AppBar';
import Typography from 'material-ui/Typography';
import Toolbar from 'material-ui/Toolbar';
import Login from '../Login/index'
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
        'Poppins'
    ].join(','),
  },
});

const styles = theme => ({
    appBar: {
      display:'block',
      position:'relative'
    },
 
  });


  class TextFields extends React.Component {

    render() {
      const { classes } = this.props;
     
  
  
      return (
        <div>
            <MuiThemeProvider theme={theme}>
             <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            Powered By NerdWare
          </Typography>
        </Toolbar>
      </AppBar>
      <Login history={this.props.history}/>
      </MuiThemeProvider>
        </div>
      );
    }
  }
  
  TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  export default withStyles(styles)(TextFields);
  