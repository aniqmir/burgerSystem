import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme,withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import brown from '@material-ui/core/colors/brown';
import orange from '@material-ui/core/colors/orange';
import grey from '@material-ui/core/colors/grey';
import Home from './Home';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Grow from '@material-ui/core/Grow';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Carousel from '../Carousel';
import Paper from '@material-ui/core/Paper';
import SearchImage from './SearchImage';




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
 } })
const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: brown,
    marginLeft:'5%',
    marginRight:'5%'
  },

  textfield: {
  
  },
  btn: {
    marginLeft: '10px',
    marginTop: '3px'
  },
  /*parallax: {
      backgroundImage:`url(${"https://imageresizer.static9.net.au/7PEZE_-FEeeife-33FAB3atcYaM=/1024x0/http%3A%2F%2Fprod.static9.net.au%2F_%2Fmedia%2FNetwork%2FImages%2F2017%2F06%2F16%2F09%2F55%2F170617coach_hot_chips.jpg"})`,
      minHeight: '500px',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
}*/

})

class SimpleTabs extends React.Component {
  state = {
    value: 0,
    data:{ 
      burger1: {  name:'Big Mac',
                  details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
                  status:true,
                  loading:false,
                  image:"https://www.hungryhorse.co.uk/media/3117/pit-burger.jpg",
                  buildDetails: 'Yes',
                  price:500
                },
              
       burger2:  {  name:'Texas Jack',
                  details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
                  status:false,
                  loading:false,
                  image:"https://truffle-assets.imgix.net/0d26ee59-813-lucyjuicycrunchburger-land1.jpg",
                  price:500
               },
               burger3:  {  name:'Texas Jack',
               details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
               status:false,
               loading:false,
               image:"https://truffle-assets.imgix.net/0d26ee59-813-lucyjuicycrunchburger-land1.jpg",
               price:500
            },
            burger4:  {  name:'Texas Jack',
            details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
            status:false,
            loading:false,
            image:"https://truffle-assets.imgix.net/0d26ee59-813-lucyjuicycrunchburger-land1.jpg",
            price:500
         },
         burger5:  {  name:'Texas Jack',
         details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
         status:false,
         loading:false,
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
          },
        status:false,
        loading:false,           
        
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
      console.log('ing');
      console.log(this.state.checkoutDetails);
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
  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
     <MuiThemeProvider theme={theme}>
     <SearchImage/>
     <div className={classes.parallax}>
      <div className={classes.root}>
        <Grid container spacing={12}>
       {
         /*<Grid item xs={12}>
        <Carousel/>
        </Grid>*/
        } 
          {Object.values(this.state.data).map((type,index) => {  
            //() => this.setStatus(type.status,type.loading)    
            return (
              <Grow in={true} mountOnEnter unmountOnExit>
              <Grid item md={4} sm={8} key={index}>
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
        </Grid> }
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