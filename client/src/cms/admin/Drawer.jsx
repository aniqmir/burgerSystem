import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from 'material-ui/IconButton';
import Hidden from 'material-ui/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from 'material-ui/Divider';
import Paper from "material-ui/Paper";
import AddItem from './AddItem';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import Button from 'material-ui/Button';
import List, { ListItem, ListItemText } from 'material-ui/List';
import ViewItems from './ViewItems';
import Welcome from './welcome';
import { 
  Router,
  Route
  }   from 'react-router-dom';



const drawerWidth = 240;

const theme2 = createMuiTheme({

  overrides: {
    MuiButton: {
      backgroundColor:'#00838F',
      // Name of the styleSheet
      root: {
        // Name of the rule
        
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        backgroundColor:'#00838F',
        width:'100%',
      },
      
    },
    
  },
});

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  MuiButton:{
    background:'#00838F',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor:'#00838F'
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  button: {
    background:'#00838F',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
  width:'100%'},
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, // So the Typography noWrap works
    height:'100%',
  },
  toolbar: theme.mixins.toolbar,
});





class ClippedDrawer extends React.Component {
  constructor()

  {
    super();
  this.state = {
    //SmobileOpen: false,
    //t:this.props.token,
      OnDisplay: <Welcome />,
      title:'Burger System'
     
    //open:false,
    //openError:false,
  };
}

AddItemClick = () => {

  this.setState({
      //OnDisplay:<RecieveBox token={this.state.t} shop={this.props.shop} handleopen={this.handleClickDialogOpen} handleError={this.handleClickerrorDialogOpen}/>,
      OnDisplay :<AddItem/>,
      title:"Add Item"
  })
  console.log("Add Item ")
}

ViewItemsClick= () => {

  this.setState({
      //OnDisplay:<RecieveBox token={this.state.t} shop={this.props.shop} handleopen={this.handleClickDialogOpen} handleError={this.handleClickerrorDialogOpen}/>,
      title:"View Items",
      OnDisplay:<ViewItems/>
  })
  console.log("View Items")
}
AddEmployeeClick= () => {

  this.setState({
      //OnDisplay:<RecieveBox token={this.state.t} shop={this.props.shop} handleopen={this.handleClickDialogOpen} handleError={this.handleClickerrorDialogOpen}/>,
      title:"Add Employees"
  })
  console.log("Add Employee ")
}
ViewEmployeesClick= () => {

  this.setState({
      //OnDisplay:<RecieveBox token={this.state.t} shop={this.props.shop} handleopen={this.handleClickDialogOpen} handleError={this.handleClickerrorDialogOpen}/>,
      title:"View Employees"
  })
  console.log("View Employees ")
}
render(){

const drawer = (
  <div>
    <div />
    <Divider />
   
    <List>
    <Typography variant="title" color="inherit" noWrap>
    <MuiThemeProvider theme={theme2}>
       <ListItem><Button variant="raised" color="primary" onClick={this.AddItemClick.bind(this)} >Add Item </Button></ListItem>
       <Divider />
        <ListItem><Button variant="raised" color="primary" onClick={this.ViewItemsClick.bind(this)}>View Items</Button></ListItem>
        <Divider/>
        <ListItem><Button variant="raised" color="primary" onClick={this.AddEmployeeClick.bind(this)} >Add Employee</Button></ListItem>
        <Divider />
       
        <ListItem><Button variant="raised" color="primary" onClick={this.ViewEmployeesClick.bind(this)}>View Employees </Button></ListItem>

        <Divider/>
        <ListItem><Button variant="raised" color="primary" onClick={this.props.logoutScreen}>Log Out </Button></ListItem>
        <Divider/>
        
        {/*<ListItem>Queue Details</ListItem>*/}
        </MuiThemeProvider>
        </Typography>
    </List>
   
    
  </div>
);
  const { classes } = this.props;

  return (
    <div className={classes.root}>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            {this.state.title}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        {drawer}
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        
        {this.state.OnDisplay}
        
      </main>
    </div>
  );
}
}

ClippedDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ClippedDrawer);