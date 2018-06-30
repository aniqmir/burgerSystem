import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

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
  }
};



class CheckOut extends React.Component {
  state = {
    open: false,
    items:[],
    counter:0
  };
   
  
  render() {
    return (
      <div>
        {this.props.state}
      </div>
    );
  }
}

CheckOut.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckOut);