import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme,withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import brown from '@material-ui/core/colors/brown';
import Home from '../MainPage/Home';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import Grow from '@material-ui/core/Grow';
import SearchImage from '../MainPage/SearchImage';
import Cart from '../Cart/Cart';
  import {
    //BrowserRouter as 
    Router,
    Route,
    Link
    }   from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Footer from '../Footer/Footer';
import Search from '@material-ui/icons/Search';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';




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
  card: {
    maxWidth:'100%'
  },
  media: {
    paddingTop:'15%'
  },
  typo:{
     textShadow: ' 0 0 20px #000000',
  },
  btn: {
    marginLeft: '10px',
    marginTop: '3px'
  },

  parallax: {
      //backgroundImage:`url(${"./logo2.png"})`,
      backgroundImage:`url(${"https://www.xmple.com/wallpaper/stripes-orange-black-lines-streaks-1920x1080-c2-000000-ff8c00-l2-117-117-a-30-f-1.svg"})`,
      minHeight: '100vh',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'relative',
      backgroundRepeat: 'repeat',
      //backgroundSize: '100%',
      //background:'linear-gradient(-180deg, red, yellow)'
},
container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  btn:{
    paddingTop:'1%'
  },
  paperroot:{
      width:"50%",
      textAlign:'center',
      margin:'auto',
  },
  cssLabel: {
    '&$cssFocused': {
      color: 'purple[500]',
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: 'purple[500]',
    },
  },
  bootstrapRoot: {
    'label + &': {
      margin: 'auto',
      position:'absolute'
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },

})

class SimpleTabs extends React.Component {
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
      burger3:{  name:'Ranchers Special',
              details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
              status:false,
              image:"https://truffle-assets.imgix.net/0d26ee59-813-lucyjuicycrunchburger-land1.jpg",
              price:500
              },
            burger4:  {  name:'Big Ben',
            details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
            status:false,
            image:"https://truffle-assets.imgix.net/0d26ee59-813-lucyjuicycrunchburger-land1.jpg",
            price:500
         },
         burger5:  {  name:'Crispy Crisp',
         details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
         status:false,
         image:"https://truffle-assets.imgix.net/0d26ee59-813-lucyjuicycrunchburger-land1.jpg",
         price:500
      },
      burger6:  {  name:'Happy Meal',
      details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
      status:false,
      loading:false,
      image:"https://truffle-assets.imgix.net/0d26ee59-813-lucyjuicycrunchburger-land1.jpg",
      price:500
   },
           burger7:   {  name:'Murtaza Akbar',
                  details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
                  status:false,
                  loading:false,
                  image:"https://truffle-assets.imgix.net/0d26ee59-813-lucyjuicycrunchburger-land1.jpg",
                  price:500
               },
               burger8:  {  name:'Glass',
               details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
               status:false,
               loading:false,
               image:"https://truffle-assets.imgix.net/0d26ee59-813-lucyjuicycrunchburger-land1.jpg",
               price:500
            },
            burger9:  {  name:'Anday Wala Burger',
            details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
            status:false,
            loading:false,
            image:"https://truffle-assets.imgix.net/0d26ee59-813-lucyjuicycrunchburger-land1.jpg",
            price:500
         },
         burger10:  {  name:'Hardees Big',
         details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
         status:false,
         loading:false,
         image:"https://truffle-assets.imgix.net/0d26ee59-813-lucyjuicycrunchburger-land1.jpg",
         price:500
      },
      burger11:  {  name:'Zinger',
      details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
      status:false,
      loading:false,
      image:"https://truffle-assets.imgix.net/0d26ee59-813-lucyjuicycrunchburger-land1.jpg",
      price:500
   },
        
    },
      search:'',
      status:false,
      checkoutDetails:[]
  };


  handleChange = (event, value) => {
    this.setState({ value });
  };
  
  searchhandleChange = (e) => {
    this.setState({
      search:e.target.value
    })
    
}
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
    let filteredData = this.state.data;
    filteredData = Object.values(filteredData).map(
        (type) => {
            if(type.name.toLowerCase().indexOf(this.state.search.toLowerCase()) >= 0)
            {return type}
            else
            {return this.state.data}
        }
    )  
    return (
     <MuiThemeProvider theme={theme}>
    
    <div>
        <Card>
          <CardMedia
          className={classes.media}
           image="https://static.olocdn.net/menu/applebees/c667aa8060427981c4a8d79502fda788.jpg">
           <CardContent >
           <Typography align='center'  color='primary' gutterBottom='true' variant='display1' className={classes.typo} >
              <strong>  BUILD WHAT YOU WANT TO EAT </strong>
              </Typography>
              <Paper className={classes.paperroot}>
        <Grid container spacing={12}>
        <Grid item md={10} sm={6} xs={12}>
        <TextField
        //label="Search"
        id="search"
        placeholder="Search..."
        type='search'
       
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.bootstrapRoot,
            input: classes.bootstrapInput,
          },
        }}
        onChange={e=>this.searchhandleChange(e)}
        InputLabelProps={{
          shrink: true,
          className: classes.bootstrapFormLabel,
        }}
  
        fullWidth
      />
      </Grid>
      <Grid item md={2} sm={6} xs={12}>
      <Button ><Search/></Button>{/*<SearchDialog button={this.state.button}/>*/}
      </Grid>
      </Grid>
      </Paper>
           </CardContent>
          </CardMedia>
        </Card>
      </div>
     
  
      <div className={classes.parallax}>
      <div className={classes.root}>
        <Grid container spacing={12}>
           {Object.values(filteredData).map((type,index) => {  
            return (
              <Grow in={true} mountOnEnter unmountOnExit  timeout={800}>
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
        <div>
            <Footer/>
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