import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CartItems from './CartItems';
import _ from 'lodash';
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

class FullScreenDialog extends React.Component {
  state = {
    details:[],
    items1:{
    },
  }
  proceedToCheckout = () => {
    this.props.history.push({pathname: '/checkout'});
    }

  handleChange = name => event => {
    
    this.setState({ [name]: event.target.checked});
    var newArr = this.state.ingredients;
    newArr.push(name)
    this.setState({
       ingredients:newArr
    })
    console.log(this.state.ingredients)

  };


  //updating cart new function
  updateCart=(itemID, quantity)=>{
    console.log(_.find(this.state.items1,o=> o===itemID));
    console.log("Quantity : ",quantity);
  }


  //function to get values
  componentDidMount(){
    let tempSessionCart = JSON.parse(localStorage.getItem('cartItems'));
    console.log("Items from load items function : ",JSON.parse(localStorage.getItem('cartItems')));
    this.setState({
      items1:tempSessionCart
    });
    console.log(this.state.items1);
  }


  render() {

    const { classes } = this.props;


    let displayData = () =>{
      if(this.state.items1===null){
      return (<Typography variant="display2" color="error"> Please Select Some Items First </Typography>);
      }
      else{
        return(              
          <div>
              <Typography className='text text-black' gutterBottom variant="display2" component="h2">
                Complete Your Order
                </Typography>
                <Typography className='text' gutterBottom variant="display3">
                Please verify the order details and proceed to checkout.
                </Typography>
         { Object.values(this.state.items1).map((type,index) => {  
            return (
              <div>
                <Paper className={classes.paper} elevation={8}>
                        <CartItems name={type[0]}
                              details={type[2]} 
                              status={type[4]} 
                              image={type[3]}        
                              price={type[1]}
                              itemId={type[5]}
                              updateCart={this.updateCart}         
                              />
                  </Paper>
                  </div>
                    );
                  }) }
            </div>)
      }
    }



    return (
      <div className={classes.divBackground}>
          <Paper  elevation={2}>
              <Grid container spacing={12}>
                <Grid item md={12} sm={12}>
                <Card className={classes.cardRight}>
                <CardContent>
                
                <List className={classes.root}>
                    {displayData()}
                </List>
                </CardContent>
                <CardActions>
                </CardActions>
                </Card>
                </Grid>

             </Grid>
             <Button color="inherit" onClick={this.proceedToCheckout}>
                Proceed to checkout
              </Button>
           </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(FullScreenDialog);