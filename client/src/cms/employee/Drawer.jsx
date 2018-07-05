
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import List, { ListItem } from 'material-ui/List';
import Dialog from './Dialog';
import Dialog2 from './Dialog2';
import ViewOrder from './ViewOrder';
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid';


const theme2 = createMuiTheme({
    overrides: {
      MuiButton: {
        // Name of the styleSheet
        root: {
          // Name of the rule
          background: 'black',
          borderRadius: 3,
          border: 5,
          color: 'white',
          height: 70,
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .30)',
          width:200,
        },
      },
    },
  });


const styles = theme => ({
  root: {
  
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar:theme.mixins.toolbar,
  drawerPaper: {
    width: '100%',
    height:'100%',
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow:1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    width:'100%',
    height:'100%',
    position:'relative',
  },
  center:{
    margin:'auto',
    align:'center',
  }
});



class ResponsiveDrawer extends React.Component {
  constructor(props){
    super(props)
      this.state = {
      mobileOpen: false,
      t:this.props.token,
      OnDisplay: <div>WELCOME</div>,
      processingTime:0,
      
      data:{
          order1:{
              id:'1234',
              name:'burger 1',
              price:'2000',
              address:'Islamabad',
              time:new Date(),
              details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry',    
          },
          order2:{
            id:'1235',
            name:'burger 2',
            price:'2000',
            address:'Islamabad',
            time:new Date(),
            details: 'Lorem Ipsum is simply dummy text of the printing and type setting industryLorem Ipsum is simply dummy text of the printing and typesetting industry',    
        },
      },
      data2:{
        order1:{
            id:'1234',
            name:'burger 1',
            price:'2000',
            address:'Islamabad',
            details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industryLorem Ipsum is simply dummy text of the printing and typesetting industry',    
        },
        order2:{
          id:'1235',
          name:'burger 2',
          price:'2000',
          address:'Islamabad',
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry',    
      },
    },
    };


  }
 
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };


 ViewAllHandleClick = () => {
    this.setState({
       // OnDisplay:<ViewAllOrders token={this.state.t} handleopen={this.handleClickDialogOpen} handleError={this.handleClickerrorDialogOpen} data={this.state.data}/>
    })
    console.log("View All item Click")
  }


  ViewOrder = (orders) => {
    console.log(orders)
    this.setState({
      OnDisplay:<ViewOrder/>
    })
  }

  time15 = () => {
    this.setState({
      processingTime:(15*60),
      data2:{
        order2:{
          id:'1235',
          name:'burger 2',
          price:'2000',
          address:'Islamabad',
          details: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        } 
      }
    })
    console.log(this.state.processingTime)
  }
  time30 = () => {
    this.setState({
      processingTime:(30*60),
    })
    console.log(this.state.processingTime)
  }
  time45 = () => {
    this.setState({
      processingTime:(45*60),
    })
    console.log(this.state.processingTime)
  }
  time60 = () => {
    this.setState({
      processingTime:(60*60)
    })
    console.log(this.state.processingTime)
  }


  dispatch = () => {
    this.setState({
      processingTime:0
    })
  }
  componentDidMount() {
    var details = {
      'token':this.state.t
    }
  var formBody = [];
  for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
  }
  formBody = formBody.join("&");
    fetch('/api/user/emp/showOrders', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
      },
    }).then(res=>res.json())
    .then(res=>{
      if(res){
        console.log(res)
        this.setState({
          data:res,
        });
      }
    }
    );
  }

 
  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <MuiThemeProvider theme={theme2}>
        <div className={classes.toolbar}>
          <List >
          <ListItem><strong><h1>New ORDERS</h1></strong></ListItem>
         {
           Object.values(this.state.data).map((orders,i)=>{
             
            return(
              <div >
                <Dialog  id={orders.id}  details={orders.details}  name={orders.name} price={orders.price} address={orders.address} time15={this.time15} time30={this.time30} time45={this.time45} time60={this.time60}/>
                <Divider/>
                </div>
           )})
         }
        </List> 
      </div>
      </MuiThemeProvider>
    );
    let drawer2 = <div>Welcome</div>
    if(this.state.processingTime===0){
      drawer2 = (
        <ListItem><strong><h1>No orders in Process</h1></strong></ListItem>
      )
    }
    else{
        drawer2 = (
        <MuiThemeProvider theme={theme2}>
          <div className={classes.toolbar}>
            <List>
            <ListItem><strong><h1>Processing ORDERS</h1></strong></ListItem>
           {
             Object.values(this.state.data2).map((orders,i)=>{
              return(
                <div>
                  <Dialog2  id={orders.id}  processingTime={this.state.processingTime} details={orders.details} name={orders.name} price={orders.price} address={orders.address} dispatch={this.dispatch}/>
                  <Divider/>
                </div>
             )})
           }
          </List> 
        </div>
        </MuiThemeProvider>
      );

    }
    
    return (
        <div className={classes.root}>
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={this.handleDrawerToggle}
                className={classes.navIconHide}
              >
                <MenuIcon/>
              </IconButton>
              <Typography variant="title" color="inherit" noWrap>
                Powered By NerdWare
              </Typography>
            </Toolbar>
          </AppBar>
          <Hidden mdUp>
            <Drawer
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={this.state.mobileOpen}
              onClose={this.handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden smDown implementation="css">
            <Grid container spacing={12}>
              <Grid item md={6}>
            <Drawer
              variant="permanent"
              open
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer}
            </Drawer>
            </Grid>
            <Grid item md={6}>
            <Drawer
              variant="permanent"
              open
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              {drawer2}
            </Drawer>
            </Grid>
            </Grid>
          </Hidden>
        </div>
      );
    }
  }
  
  ResponsiveDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);