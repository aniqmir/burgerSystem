import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from 'material-ui/Button';
import List from '@material-ui/core/List';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Dialog from './Dialog';

const drawerWidth = 240;
var orders = [9480];
const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    height: 'auto',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    color:'white',

    backgroundColor: '#eab25d',
    padding: theme.spacing.unit * 1,
  },
  card :
  {
    width:'95%',
    marginLeft:'auto',
    marginBottom:'10px',
    marginRight:'auto',
  }
  ,

});

class PermanentDrawer extends React.Component {
  constructor(props)
  {
    super(props);
    this.state={
      open: false,
    }
    this.url = "https://notificationsounds.com/soundfiles/8eefcfdf5990e441f0fb6f3fad709e21/file-sounds-1100-open-ended.mp3";
    this.audio = new Audio(this.url);
  };
  
 
 
  handleChange = event => {
    this.setState({
      anchor: event.target.value,
    });
  };
  newOrder = event =>
  {
    event.preventDefault();
    orders.push(12964);
    this.forceUpdate();
    console.log(orders);
    console.log("Playing Notification Sound Function");
    this.audio.play();
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    const { anchor } = this.state;

  

    return (
      <div className={classes.root}>
        
        <div className={classes.appFrame}>
        
        <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor={anchor}
      >
      
        <div className={classes.toolbar} />
        <List>
         {Object.values(this.props.data).map((orders,i)=>{
        
            return(<Card className={classes.card}>
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="subheading" color="textSecondary">
             <Dialog id={orders.id} name={orders.name} price={orders.price} address={orders.address}/>
            </Typography>
              
          </CardContent>
          <div className={classes.controls}>
          </div>
        </div>
        </Card>
        )})
      }
        </List> 
      </Drawer>
        </div>
      </div>
    );
  }
}

PermanentDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PermanentDrawer);