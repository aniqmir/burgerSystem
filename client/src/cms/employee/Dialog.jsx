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
import Divider from '@material-ui/core/Divider';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
  button: {
    height:'50vh',
    backgroundColor:'orange'
  },
  input: {
    display: 'none',
  },
  text: {
    margin:'20%',
    borderStyle: 'dotted',
    borderWidth: '5px',
  }
});

class AlertDialog extends React.Component {
  state = {
    open:false,
  };
  
  time15 = () => {
    this.props.time15(25);
    this.setState({
      open:false,
    })
  }
  time30 = () => {
    this.props.time30();
    this.setState({
      open:false,
    })
  }
  time45 = () => {
    this.props.time45();
    this.setState({
      open:false,
    })
  }
  time60 = () => {
    this.props.time60();
    this.setState({
      open:false,
    })
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <ListItem button  onClick={this.handleClickOpen}><Typography variant='headline'><strong>#{this.props.id}<br/>Name:{this.props.name} <br/> Price:{this.props.price}</strong></Typography></ListItem>
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
          </DialogContent>
          </div>
          <Button onClick={this.handleClose} fullWidth>Cancel</Button>
          </Grid>
          <Grid item md={6}>
          <DialogActions>
          <Grid container spacing = {12}>
          <Grid item md={6}>
            <Button  className={classes.button} fullWidth onClick={this.time15} >
              15 Minutes
            </Button>
            <Divider/>
            <Divider/>
            </Grid>
            <Grid item md={6}>
            <Button  className={classes.button} fullWidth onClick={this.time30}  autoFocus>
              30 Minutes
            </Button>
            <Divider/>
            <Divider/>
            </Grid>
            <Grid item md={6}>
            <Button  className={classes.button} fullWidth onClick={this.time45} >
              45 Minutes
            </Button>
            <Divider/>
            <Divider/>
            </Grid>
            <Grid item md={6}>
            <Button className={classes.button}  fullWidth onClick={this.time60}  autoFocus>
              60 Minutes
            </Button>
            <Divider/>
            <Divider/>
            </Grid>
            </Grid>
          </DialogActions>
         
          </Grid>
          </Grid>
        </Dialog>
        
      </div>
    );
  }
}

export default withStyles(styles)(AlertDialog);
