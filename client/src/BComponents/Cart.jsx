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
import { Input } from '@material-ui/core';
import CartItems from './CartItems';

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

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
  state = {
    open: false,
    items:[],
    counter:0
  };
   
  handleChange = name => event => {
    
    this.setState({ [name]: event.target.checked, 
                  });
                  var newArr = this.state.ingredients;
                  newArr.push(name),
    this.setState({
     ingredients:newArr
                  })
    console.log(this.state.ingredients)

  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  increment=()=>{
    this,this.setState({
      counter:this.state.counter+1
    });
  }

  decrement=()=>{
    this,this.setState({
      counter:this.state.counter-1
    });
  }


  render() {
    const { classes } = this.props;
    return (
      <div>
        <IconButton size='small' disableFocusRipple={true}  onClick={this.handleClickOpen}><AddShoppingCartIcon/></IconButton>
        
        <Dialog
          fullScreen
          fullWidth={true}
          maxWidth={false}
          autoScrollBodyContent={true}
          className={classes.dialog}
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
        <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="title" color="inherit" className={classes.flex}>
                Cart
              </Typography>
              <Button color="inherit" onClick={this.handleClose}>
                Proceed to checkout
              </Button>
            </Toolbar>
          </AppBar>
    <Paper  elevation={2}>
        <Grid container spacing={12}>

          <Grid item md={12} sm={12}>
          <Card className={classes.cardRight}>
          <CardContent>
          <Typography className='text text-white' gutterBottom variant="display2" component="h2">
           Complete Your Order
          </Typography>
          <Typography className='text' gutterBottom variant="p" component="h2">
           Please verify the order details and proceed to checkout.
          </Typography>
          <List className={classes.root}>
          <Paper className={classes.paper} elevation={8}>
          <CartItems/>
          </Paper>

          </List>
          </CardContent>
          <CardActions>
          </CardActions>
          </Card>
          </Grid>

           </Grid>
           </Paper> {/* end of Main Paper */}
        </Dialog>
      </div>
    );
  }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullScreenDialog);