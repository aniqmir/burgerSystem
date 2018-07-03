import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from './CheckoutTable';
import Guest from './Guest';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    width: '100%',
    position: 'relative',
    overflow: 'auto',
  },
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  cardLeft: {
    width: '100%',
    height:'500px'
  },
  cardRight: {
    height:'100%',
    width:'100%',
    backgroundColor:'#E0E0E0'
  },
  text:{
    color:'inherit',
    paddingTop:'15px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: '100%',
  },
  center:{
    textAlign:'center',
    margin:'auto'
  },
  paper: {
    marginTop:'20px'
  },
  counterWidth:{
    width:50,
    margin:'auto'
  },
  divBackground:{
    backgroundImage:`url(${"https://www.xmple.com/wallpaper/stripes-orange-black-lines-streaks-1920x1080-c2-000000-ff8c00-l2-117-117-a-30-f-1.svg"})`,
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    paddingTop:"10%"
  }
};



class CheckOut extends React.Component {
  state = {
    open: false,
    items:[],
    counter:0
  };
   

  
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.divBackground}>
      <Grid container spacing={12}>
      <Grid item md={12}>
        <Table/>
        </Grid>
        <Grid item md={12}>
        <Guest/>
        </Grid>
        </Grid>
      </div>
    );
  }
}

CheckOut.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckOut);