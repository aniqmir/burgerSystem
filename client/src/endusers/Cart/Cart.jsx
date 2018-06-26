import React from 'react';
import PropTypes from 'prop-types';
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
import { colors } from '@material-ui/core';

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

class FullScreenDialog extends React.Component {
  state = {
    items:{ 
      cartitem1:{ name:'Big Mac',
                  details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
                  status:true,
                  image:"https://www.hungryhorse.co.uk/media/3117/pit-burger.jpg",
                  buildDetails: 'Yes',
                  price : 900
                },
      burger6:  {  name:'Texas Jack',
                details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
                status:false,
                image:"https://truffle-assets.imgix.net/0d26ee59-813-lucyjuicycrunchburger-land1.jpg",
                price:500
                },
  },
    details:[],
  };
   

  proceedToCheckout = () => {
    this.props.history.push({pathname: '/checkout'});
    }

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


  //updating cart new function

  updateCart=(itemID, quantity)=>{
    for (let i = 0; i<this.state.items.length;i++){
      console.log("from cart",i);
      let item=this.state.items[i];
      for(let j=0;j<item.length;j++){
        console.log(item[j]);
      }

    }
  }


  loadItems=()=>{
    let tempSessionCart = JSON.parse(localStorage.getItem('cartItems'));
    console.log("Items from load items function : ",JSON.parse(localStorage.getItem('cartItems')));
    this.setState({
      items1:tempSessionCart
    })
  }

  //function to get values
  componentDidMount(){
    this.loadItems();
  }


  render() {

    const { classes } = this.props;
    return (
      <div>

          <Paper  elevation={2}>
              <Grid container spacing={12}>

                <Grid item md={12} sm={12}>
                <Card className={classes.cardRight}>
                <CardContent>
                <Typography className='text text-black' gutterBottom variant="display2" component="h2">
                Complete Your Order
                </Typography>
                <Typography className='text' gutterBottom variant="p" component="h2">
                Please verify the order details and proceed to checkout.
                </Typography>
                <List className={classes.root}>
                  {/* Traversing Items here  */}
                  {Object.values(this.state.items).map((type,index) => {  
                    return (
                        <Paper className={classes.paper} elevation={8}>
                                <CartItems name={type.name}
                                      details={type.details} 
                                      status={type.status} 
                                      image={type.image}        
                                      price={type.price}             
                                      buildDetails={type.buildDetails}
                                      />
                        </Paper>
                            );
                          })
                    }
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
           </Paper> {/* end of Main Paper */}
        
      </div>
    );
  }
}

export default withStyles(styles)(FullScreenDialog);