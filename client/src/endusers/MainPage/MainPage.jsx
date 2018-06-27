import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme,withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import brown from '@material-ui/core/colors/brown';
import Home from './Home';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Grow from '@material-ui/core/Grow';
import SearchImage from './SearchImage';
import Cart from '../Cart/Cart';
  import {
    //BrowserRouter as 
    Router,
    Route,
    Link
    }   from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';






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

 },
 typography: {
  // Use the system font instead of the default Roboto font.
  fontFamily: [
    'Bangers'
  ].join(','),
}, })
const styles = theme => ({
  root: {
    flexGrow: 1,
    //backgroundColor: 'brown',
    marginLeft:'3%',
    marginRight:'3%',
    //margin:'3%'
  },

  textfield: {
  
  },
  btn: {
    marginLeft: '10px',
    marginTop: '3px'
  },
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

  parallax: {
      backgroundImage:`url(${"https://www.xmple.com/wallpaper/stripes-orange-black-lines-streaks-1920x1080-c2-000000-ff8c00-l2-117-117-a-30-f-1.svg"})`,
      minHeight: '100vh',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'relative',
      backgroundRepeat: 'no-repeat',
     // backgroundSize: '100%',
      //background:'linear-gradient(-180deg, red, yellow)'
}

})

class SimpleTabs extends React.Component {
  state = {
    value: 0,
    data:{ 
      burger1: {  name:'Big Mac',
                  details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
                  status:true,
                  image:"https://www.hungryhorse.co.uk/media/3117/pit-burger.jpg",
                  image:"https://www.hungryhorse.co.uk/media/3117/pit-burger.jpg",
                  buildDetails: 'Yes',
                  price:500
                },
              
       burger2:{  name:'Texas Jack',
                  details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
                  status:false,
                  image:"https://truffle-assets.imgix.net/0d26ee59-813-lucyjuicycrunchburger-land1.jpg",
                  price:500
               },
      burger3:{  name:'Texas Jack',
              details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
              status:false,
              image:"https://truffle-assets.imgix.net/0d26ee59-813-lucyjuicycrunchburger-land1.jpg",
              price:500
              },
            burger4:  {  name:'Texas Jack',
            details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
            status:false,
            image:"https://truffle-assets.imgix.net/0d26ee59-813-lucyjuicycrunchburger-land1.jpg",
            price:500
         },
         burger5:  {  name:'Texas Jack',
         details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
         status:false,
         image:"https://truffle-assets.imgix.net/0d26ee59-813-lucyjuicycrunchburger-land1.jpg",
         price:500
      },
      burger6:  {  name:'Texas Jack',
      details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
      status:false,
      loading:false,
      image:"https://truffle-assets.imgix.net/0d26ee59-813-lucyjuicycrunchburger-land1.jpg",
      price:500
   },
           burger7:   {  name:'Texas Jack',
                  details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
                  status:false,
                  loading:false,
                  image:"https://truffle-assets.imgix.net/0d26ee59-813-lucyjuicycrunchburger-land1.jpg",
                  price:500
               },
               burger8:  {  name:'Texas Jack',
               details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
               status:false,
               loading:false,
               image:"https://truffle-assets.imgix.net/0d26ee59-813-lucyjuicycrunchburger-land1.jpg",
               price:500
            },
            burger9:  {  name:'Texas Jack',
            details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
            status:false,
            loading:false,
            image:"https://truffle-assets.imgix.net/0d26ee59-813-lucyjuicycrunchburger-land1.jpg",
            price:500
         },
         burger10:  {  name:'Texas Jack',
         details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
         status:false,
         loading:false,
         image:"https://truffle-assets.imgix.net/0d26ee59-813-lucyjuicycrunchburger-land1.jpg",
         price:500
      },
      burger11:  {  name:'Texas Jack',
      details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
      status:false,
      loading:false,
      image:"https://truffle-assets.imgix.net/0d26ee59-813-lucyjuicycrunchburger-land1.jpg",
      price:500
   },
        
    },

      status:false,
        
        checkoutDetails:[]
  };


  handleChange = (event, value) => {
    this.setState({ value });
  };

  checkoutDetailsHandle = (det) => {
    let tempdetails = this.state.checkoutDetails;
    tempdetails.push(det);
      this.setState({
        checkoutDetails: tempdetails
      })
      console.log(this.state.checkoutDetails);
      localStorage.setItem('cartItems',JSON.stringify(this.state.checkoutDetails));
  }

  loadingHandle = () => {
    console.log('loading')
    this.setState({
      status:false,
      loading:true,
    })
  }

  setStatus = (s,l) => {

      this.setState({
        status:{s},
        loading:{l}
      })
  }
  cancelHandle = () => {
    console.log('cancel order')
    this.setState({
      status:this.state.status,
      loading:false,
    })
  }
  operationCart = () => {
    this.props.history.push('/cart');
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;

   
    return (
     <MuiThemeProvider theme={theme}>
     <SearchImage/>
    {/*
    <Route path='/cart' render={(props) => <Cart {...props} checkout={this.state.checkoutDetails}/>}/>
     <Link to='/cart'>Cart</Link>
    */} 
     <div className={classes.parallax}>
      <div className={classes.root}>
        <Grid container spacing={12}>
       {/*<Grid item xs={12}>
        <Carousel/>
        </Grid>*/ } 
          {Object.values(this.state.data).map((type,index) => {  
            //() => this.setStatus(type.status,type.loading)    
            return (
              <Grow in={true} mountOnEnter unmountOnExit justify='center'>
              <Grid item md={3} sm={6} xs={12}  key={index}>
              <Home name={type.name}
                    details={type.details} 
                    status={type.status} 
                    image={type.image}        
                    price={type.price}             
                    buildDetails={type.buildDetails}
                    loading={this.state.loading}
                    loadingHandle={this.loadingHandle}
                    cancelHandler={this.cancelHandle}
                    checkoutDet={this.checkoutDetailsHandle}
                    />
              </Grid>    
              </Grow>
            );
          })
        }
        </Grid> 
      </div>
        <div className={classes.footer}>
        <div className={classes.footerPadding}>
        <Grid container spacing={0} justify='center'>
        <Grid item  md={1} sm={3} xs={6}>
          <Typography color='primary' variant="caption" align="center" gutterBottom={true}>About Us</Typography>
        </Grid>
        <Grid item md={1} sm={3} xs={6}>
          <Typography color='primary' variant="caption"  align="center" gutterBottom={true}>Terms&Conditions</Typography>
        </Grid>
        <Grid item md={1} sm={3} xs={6}>
          <Typography color='primary' variant="caption"  align="center" gutterBottom={true} >Privacy Policy</Typography>
        </Grid>
        <Grid item md={1} sm={3} xs={6}>
          <Typography color='primary' variant="caption"  align="center" gutterBottom={true} >Contact</Typography>
        </Grid>
        <Grid item md={12} sm={12} xs={12}>
        <Typography align='center' color='primary'>&copy; Powered by Nerdware Tech</Typography>
        
        </Grid>
        </Grid>
        </div>
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