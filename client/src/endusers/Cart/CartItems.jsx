import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { Typography } from '@material-ui/core';


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

class CartItems extends React.Component {

    constructor(props){
        super(props);
        this.state={
            quantity:1,
            price:this.props.price,
            itemName: this.props.name,
            image: this.props.image,
            description: this.props.details
        }
    }

    increment = () =>{
        if(this.state.quantity<=20){//remove it later
            this.setState({
                quantity:this.state.quantity+1
            });
          
        }
    }
    
    decrement = () =>{
        console.log(this.state.quantity);
        if(this.state.quantity!==0){
            this.setState({
                quantity:this.state.quantity-1
            });
        }
    }

  render() {
    const { classes } = this.props;
    return (
      <div>
            <ListItem>
            <Grid container spacing={12}>
              <Grid item md={1} className={classes.center}>
              <img src={this.state.image}  className='img img-responsive img-thumbnail' alt="" srcset=""/>
              </Grid>
              <Grid item md={3}className={classes.center}>
                <Typography><h4><strong>{this.state.itemName}</strong></h4></Typography>
              </Grid>
              <Grid item md={4} className={classes.center}>
                <Typography>{this.state.description}</Typography>
              </Grid>
              <Grid item md={2} className={classes.center}>
             
                <Button className={classes.counterWidth} size='small' onClick={this.increment} >+</Button>
                    <TextField
                        id="margin-none"
                        value={this.state.quantity}
                        className={classes.counterWidth}
                    />
                <Button className={classes.counterWidth} size='small' onClick={this.decrement} >-</Button>
              </Grid>
              <Grid item md={1} className={classes.center}>
               <Typography variant="headline">{this.state.quantity} X $ {this.state.price}</Typography>
              </Grid>
            </Grid>
            </ListItem>
      </div>
    );
  }
}

CartItems.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CartItems);