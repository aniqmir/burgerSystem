import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme,withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Home from './Home';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import SearchImage from './SearchImage';
import Footer from '../Footer/Footer';


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

  btn: {
    marginLeft: '10px',
    marginTop: '3px'
  },

  parallax: {
      //backgroundImage:`url(${"./logo2.png"})`,
      backgroundImage:`url(${"https://www.xmple.com/wallpaper/stripes-orange-black-lines-streaks-1920x1080-c2-000000-ff8c00-l2-117-117-a-30-f-1.svg"})`,
      minHeight: '100%',
      backgroundAttachment: 'fixed',
       backgroundPosition: 'relative',
      backgroundRepeat: 'repeat',
      //backgroundSize: '100%',
      //background:'linear-gradient(-180deg, red, yellow)'
}

})

class SimpleTabs extends React.Component {
  componentDidMount() {

  fetch('/api/admin/allitems', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
    },
  }).then(res=>res.json())
  .then(res=>{
    console.log("we are in this function");
    console.log(res);
    if(res){
      this.setState({
        data:res,
      })
      console.log(this.state.data)
      console.log("After function");
    };
  }
  );
  }
  state = {
    value: 0,
    data:{ 
      burger1: {  name:'Big Mac',
                  details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
                  status:true,
                  image:"https://www.hungryhorse.co.uk/media/3117/pit-burger.jpg",
                  buildDetails: 'Yes',
                  price:500
                },
              
       burger2:{  name:'Texas Jack',
                  details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
                  status:true,
                  image:"https://truffle-assets.imgix.net/0d26ee59-813-lucyjuicycrunchburger-land1.jpg",
                  buildDetails:'No',
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
      checkoutDetails:[],
      fetchCheck:false
  };


  handleChange = (event, value) => {
    this.setState({ value });
  };

  checkoutDetailsHandle = (det) => {
    let localStorageTemp = JSON.parse(localStorage.getItem('cartItems'));
    if(localStorageTemp===null && this.state.fetchCheck === false)
    {
      
      let tempdetails = this.state.checkoutDetails;
      tempdetails.push(det);
        this.setState({
          checkoutDetails: tempdetails,
          fetchCheck:true
        })
        console.log(this.state.checkoutDetails);
        localStorage.setItem('cartItems',JSON.stringify(this.state.checkoutDetails));
    }
    else if(localStorageTemp!=null && this.state.fetchCheck=== false){
      let tempdetails = this.state.checkoutDetails;
      tempdetails.push(det);
      Object.values(localStorageTemp).map (
        (key,index)=>{
             tempdetails.push(key);
        }
      )
        this.setState({
          checkoutDetails: tempdetails,
          fetchCheck:true
        })
        console.log(this.state.checkoutDetails);
        localStorage.setItem('cartItems',JSON.stringify(this.state.checkoutDetails));
    }
    else{
      let tempdetails = this.state.checkoutDetails;
      tempdetails.push(det);
        this.setState({
          checkoutDetails: tempdetails
        })
        console.log(this.state.checkoutDetails);
        localStorage.setItem('cartItems',JSON.stringify(this.state.checkoutDetails));
    }

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
   
    return (
     <MuiThemeProvider theme={theme}>
    
     <SearchImage data={this.state.data} />
     
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
              <Grow in={true} mountOnEnter unmountOnExit  timeout={800}>
              <Grid item lg={3} md={4} sm={6} xs={12}  key={index}>
              <Home name={type.item_name}
                    details={type.item_desc} 
                    status={type.build} 
                    image={type.imgPath}        
                    price={type.item_price}             
                    buildDetails={type.buildDetails}
                    checkoutDet={this.checkoutDetailsHandle}
                    />
              </Grid>    
              </Grow>
            );
          })
        }
        
        </Grid> 
      </div>
        
            <Footer/>
        
      </div>
      </MuiThemeProvider>
    );
  }
}
SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);