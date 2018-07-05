import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ListItem } from 'material-ui/List';
import { Typography } from 'material-ui';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  button: {
    height:'100vh',
    backgroundColor:'orange'
  },
  input: {
    display: 'none',
  },
  text: {
    margin:'20%',
    borderStyle: 'dotted',
    borderWidth: '5px',
  },
  timer:{
    marginLeft: '10%',
    width: '100px',
    height: '50px',
    backgroundColor: '#DD4814',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
});
class AlertDialog extends React.Component {
  state = {
    open:false,
    count:this.props.processingTime,
    check:0
  };
  
  tick () {
    if(this.state.count!==this.state.check)
    {
      this.setState({count: (this.state.count - 1)})
      
    }
    else if(this.state.count===this.state.check){
      clearInterval(this.timer)
    }
  }
  startTimer = () => {
    clearInterval(this.timer)
    this.timer = setInterval(this.tick.bind(this), 1000)
    
  }
  stopTimer = ()  => {
    clearInterval(this.timer)
  }
  dispatch = () => {
    this.setState({
      open:false,
    })
    this.props.dispatch();
  }


  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  componentWillUnmount () {
    clearInterval(this.timer)
  }

  componentDidMount(){
    this.startTimer()
  }
  render() {
    const {classes} = this.props
    return (
      <div>
      <ListItem button  onClick={this.handleClickOpen}><Typography variant='headline'><strong>#{this.props.id}<br/>Name:{this.props.name} <br/> Price:{this.props.price}</strong></Typography></ListItem>
      <div className={classes.timer}>
      <h1><strong>{this.state.count}</strong></h1>
      </div>
      <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullScreen
      > 
      <Grid container spacing={12}>
        <Grid item md={6}>
        <div className={classes.text}>
        <DialogTitle id="alert-dialog-title"><Typography gutterBottom={true} variant='display1'><strong> {"ORDER NO:#"}{this.props.id}</strong> </Typography>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
         <Typography gutterBottom={true} variant='display2'><strong>  Name:{this.props.name}</strong>  </Typography>
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
          <Typography gutterBottom={true} variant='display2'><strong>  Price:{this.props.price}</strong>  </Typography>
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
          <Typography gutterBottom={true} variant='p'> <strong>  Address:{this.props.address} </strong>  </Typography>
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
          <Typography gutterBottom={true} variant='p'>   Details:{this.props.details} </Typography>
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
          </DialogContentText>
        </DialogContent>
        </div>
        <Button onClick={this.handleClose} fullWidth>Cancel</Button>
        </Grid>
        <Grid item md={6}>
        <DialogActions>
        <Grid container spacing = {12}>
          <Button  className={classes.button} fullWidth onClick={this.dispatch} >
            Dispatch
          </Button>
          </Grid>
        </DialogActions>
        </Grid>
        <Grid item md={12}>
        
        </Grid>
        </Grid>
      </Dialog>
      
    </div>
    );
  }
}

export default withStyles(styles)(AlertDialog);
