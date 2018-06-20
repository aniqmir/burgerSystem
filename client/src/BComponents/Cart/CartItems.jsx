import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
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
            price:0,
            itemName:'F-10 super burger',
        }
    }

    increment = () =>{
        console.log(this.state.quantity);
        if(this.state.quantity<=20){//remove it later
            this.setState({
                quantity:this.state.quantity+1
            });

            this.props.updateDetails(this.state.quantity);
        }
    }
    
    decrement = () =>{
        console.log(this.state.quantity);
        if(this.state.quantity!=0){
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
              <img src="https://cdn.pixabay.com/photo/2018/03/04/20/08/burger-3199088__340.jpg"  className='img img-responsive img-thumbnail' alt="" srcset=""/>
              </Grid>
              <Grid item md={3}className={classes.center}>
                F-10 jumbo burger
              </Grid>
              <Grid item md={4} className={classes.center}>
                description
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
               {this.state.quantity} X $ 80
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