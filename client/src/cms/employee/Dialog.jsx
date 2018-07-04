import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ListItem } from 'material-ui/List';
import { Typography } from 'material-ui';

class AlertDialog extends React.Component {
  state = {
    open:false,
  };
  
  
  time15 = () => {
    this.props.time15();
    this.setState({
      open:false,
    })
    console.log(this.props.processingTime)
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
    return (
      <div>
        <ListItem button  onClick={this.handleClickOpen}><Typography variant='headline'>#{this.props.id},Name:{this.props.name},Price:{this.props.price}</Typography></ListItem>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
          fullScreen
        >
          <DialogTitle id="alert-dialog-title">{"ORDER NO:"}{this.props.id}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            Name:{this.props.name}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
            Price:{this.props.price}
            </DialogContentText>
            <DialogContentText id="alert-dialog-description">
            Address:{this.props.address}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.time15} color="primary">
              15 Minutes
            </Button>
            <Button onClick={this.time30} color="primary" autoFocus>
              30 Minutes
            </Button>
            <Button onClick={this.time45} color="primary">
              45 Minutes
            </Button>
            <Button onClick={this.time60} color="primary" autoFocus>
              60 Minutes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default AlertDialog;
