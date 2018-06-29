import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme,withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {
    Link
  }   from 'react-router-dom';

  
const theme = createMuiTheme ({
 typography: {
  // Use the system font instead of the default Roboto font.
  fontFamily: [
    'Poppins'
  ].join(','),
}, })
const styles = theme => ({
footer: {
    position: 'relative',
    left: 0,
    bottom: 0,
    width: '100%',
    minHeight:'100px',
    backgroundColor: 'black',
    color: 'white',
 },
 footerPadding: {
   paddingTop:'3%'
 },



})

class SimpleTabs extends React.Component {
 

  render() {
    const { classes } = this.props;
    return (
     <MuiThemeProvider theme={theme}>
        <div className={classes.footer}>
        <div className={classes.footerPadding}>
        <Grid container spacing={0} justify='center'>
        <Grid item  md={1} sm={3} xs={6}>
          <Typography color='inherit' variant="caption" align="center" gutterBottom={true}>About Us</Typography>
        </Grid>
        <Grid item md={1} sm={3} xs={6}>
          <Typography color='inherit' variant="caption"  align="center" gutterBottom={true}>Terms&Conditions</Typography>
        </Grid>
        <Grid item md={1} sm={3} xs={6}>
          <Typography color='inherit' variant="caption"  align="center" gutterBottom={true} >Privacy Policy</Typography>
        </Grid>
        <Grid item md={1} sm={3} xs={6}>
          <Typography color='inherit' variant="caption"  align="center" gutterBottom={true} >Contact</Typography>
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
        <Typography align='center' color='inherit'>&copy; Powered by Nerdware Tech</Typography>
        </Grid>
        </Grid>
        </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);