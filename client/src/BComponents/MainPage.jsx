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
import Carousel from './Carousel';
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
                  buildDetails: 'Yes'
                },
              
       burger2:  {  name:'Texas Jack',
                  details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
                  status:false,
                  loading:false,
                  image:"https://truffle-assets.imgix.net/0d26ee59-813-lucyjuicycrunchburger-land1.jpg",
               },
               burger3:  {  name:'Texas Jack',
               details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
               status:false,
               loading:false,
               image:"https://truffle-assets.imgix.net/0d26ee59-813-lucyjuicycrunchburger-land1.jpg",
            },
            burger4:  {  name:'Texas Jack',
            details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
            status:false,
            loading:false,
            image:"https://truffle-assets.imgix.net/0d26ee59-813-lucyjuicycrunchburger-land1.jpg",
         },
         burger5:  {  name:'Texas Jack',
         details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
         status:false,
         loading:false,
         image:"https://truffle-assets.imgix.net/0d26ee59-813-lucyjuicycrunchburger-land1.jpg",
      },
      burger6:  {  name:'Texas Jack',
      details:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
      status:false,
      loading:false,
      image:"https://truffle-assets.imgix.net/0d26ee59-813-lucyjuicycrunchburger-land1.jpg",
   },
          },
        status:false,
        loading:false,           
        
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

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
                    loading={this.state.loading} 
                    buildDetails={type.buildDetails}
                    loadingHandle={this.loadingHandle}
                    cancelHandler={this.cancelHandle}/>
              </Grid>    
              </Grow>
            );
          })
        }
        </Grid> }
      </div>
      </MuiThemeProvider>
    );
  }
}
SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);