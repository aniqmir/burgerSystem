import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme,withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import Home from './Home';
import Grid from '@material-ui/core/Grid';
import Grow from '@material-ui/core/Grow';
import SearchImage from './SearchImage';
import Footer from '../Footer/Footer';
import Snackbar from '@material-ui/core/Snackbar';
import amber from '@material-ui/core/colors/amber';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import Cart from '@material-ui/icons/AddShoppingCart';
import _ from 'lodash';

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
},
snackbar: {
  backgroundColor: amber[700],
},

})

class SimpleTabs extends React.Component {
  componentWillMount() {
    let temp;
  fetch('/api/admin/allitems', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
    },
  }).then(res=>res.json())
  .then(res=>{

    if(res){
      
      this.setState({
        data:res,
      });
    }
  }
  );
  
  }
  
  state = {
    value: 0,
    data:{},
    tempData:{},
    status:false,
    checkoutDetails:[],
    fetchCheck:false,
    open:false,
    home:<div></div>,
    tempIng:'abc'
  };


  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      this.setState({ open: false })
    }

    this.setState({ open: false });
  };


  checkoutDetailsHandle = (det) => {
    let localStorageTemp = JSON.parse(localStorage.getItem('cartItems'));
    if(localStorageTemp===null && this.state.fetchCheck === false)
    {
      
      let tempdetails = this.state.checkoutDetails;
      tempdetails.push(det);
        this.setState({
          checkoutDetails: tempdetails,
          fetchCheck:true,
          open:true
        })
        console.log(this.state.checkoutDetails);
        localStorage.setItem('cartItems',JSON.stringify(this.state.checkoutDetails));
    }
    else if(localStorageTemp!=null && this.state.fetchCheck=== false){
      let tempdetails = this.state.checkoutDetails;
      tempdetails.push(det);

      // Pure ES06 magic in the next line
      tempdetails.push(...localStorageTemp);

      this.setState({
        checkoutDetails: tempdetails,
        fetchCheck:true,
        open:true
      })
      console.log(this.state.checkoutDetails);
      localStorage.setItem('cartItems',JSON.stringify(this.state.checkoutDetails));
    }
    else{
      let tempdetails = this.state.checkoutDetails;
      tempdetails.push(det);
        this.setState({
          checkoutDetails: tempdetails,
          open:true
        })
        console.log(this.state.checkoutDetails);
        localStorage.setItem('cartItems',JSON.stringify(this.state.checkoutDetails));
    }
    window.location.reload();

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
     
      let home =[];
      {Object.values(this.state.data).map((type,index)=> {
         
        if(type.item_type==='pizza') {
            console.log(type)
          
            let temp= <Grow in={true} mountOnEnter unmountOnExit  timeout={800}>
            <Grid item lg={3} md={4} sm={6} xs={12}  key={index}>
            <Home 
                  itemId={type.primaryKey}
                  name={type.item_name}
                  details={type.item_desc} 
                  status={false} 
                  image={type.imgPath}        
                  price={type.item_price}             
                  buildDetails={type.buildDetails}
                  checkoutDet={this.checkoutDetailsHandle}
                  ingredients={['ing1','ing2','ing3']}
                  />
            </Grid>    
            </Grow>;
          home.push(temp);
        }
      })}
 
  
        
  
    
    return (
     <MuiThemeProvider theme={theme}>
    
     <SearchImage data={this.state.data} />
     <div className={classes.parallax}>
      <div className={classes.root}>
        <Grid container spacing={12}>
       {/*<Grid item xs={12}>
        <Carousel/>
        </Grid>*/ } 

           {Object.values(this.state.data).map((type,index) => {  
            //() => this.setStatus(type.status,type.loading)    
            if(type.item_type==='southernfriedchicken'){
                return (
                    <Grow in={true} mountOnEnter unmountOnExit  timeout={800}>
                    <Grid item lg={3} md={4} sm={6} xs={12}  key={index}>
                    <Home 
                          itemId={type.primaryKey}
                          name={type.item_name}
                          details={type.item_desc} 
                          status={type.build} 
                          image={type.imgPath}        
                          price={type.item_price}             
                          buildDetails={type.buildDetails}
                          checkoutDet={this.checkoutDetailsHandle}
                          ingredients={_.split(type.ingredients,",")}
                          />
                    </Grid>    
                    </Grow>
                  );
            }
       
         
          })
        }
        
        </Grid> 
      </div>
        
            <Footer history={this.props.history}/>
            <MuiThemeProvider theme={theme}>
            <Snackbar
           
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          
          open={this.state.open}
          autoHideDuration={6000}
          onClose={this.handleClose}
        >
        <SnackbarContent
            ContentProps={{
              'aria-describedby': 'message-id',
            }} 
            className={classes.snackbar}          
            message={<span  id="message-id"><h4><Cart/> &nbsp; &nbsp;Added to CART</h4></span>}
            >
          </SnackbarContent>
        </Snackbar>
        </MuiThemeProvider>
      </div>
      </MuiThemeProvider>
    );
  }
}
SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);