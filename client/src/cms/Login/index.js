import Login from './login';
import React, { Component } from 'react';
import AdminDrawer from '../admin/Drawer';

import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';

class App extends Component {

 

    constructor(props){
      super(props);
      this.state={
        /*
          IsLoggedInAdmin:false,

        */
       open:false,
        onDisplay:<Login updateAdmin={this.updateAdminDisplay}  handleOpen={this.handleClickOpen}/>
      }
      this.updateAdminDisplay.bind(this);
      this.logoutFunction.bind(this);
      this.handleClickOpen.bind(this);
      this.handleClose.bind(this);
    }

    handleClickOpen = () => {
      this.setState({ open: true });
    };
  
    handleClose = () => {
      this.setState({ open: false });
    };

  
  updateAdminDisplay = (token) => {
    console.log(token);
    console.log("Admin Display Function");
    //now send token to the required component
    this.setState({
      IsLoggedInAdmin:true,
      onDisplay:<AdminDrawer token={token} logoutScreen={this.logoutFunction}/>
    })
  }

  

  logoutFunction = () => {
    console.log('logging out')
    this.setState({
      onDisplay: <Login  updateAdmin={this.updateAdminDisplay}  handleOpen={this.handleClickOpen}/>
    })
  }

  render() {
    return (
      <div className="App">
        {this.state.onDisplay}
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Error"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Invalid Username or Password
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default App; 