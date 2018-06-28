import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';

const styles = theme => ({
  button: {
    display:'flex',
  },
  container: {
    display:'block',
    flexWrap:'wrap',
    position:"relative",
  },
  textField: {
    width: '100%',
  },
  
  typeobar: {
    marginTop:100
  },

  card: {
    marginLeft:'auto',
    marginRight:'auto',
    marginTop:60,
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },

  menu: {
    width: 200,
  },
});

const dropdowntypes = [
  {
    value: 'admin',
    label: 'Admin',
  },
  {
    value: 'emp',
    label: 'Employee',
  },
];
function validate(userName,Password) {
  return {
    userName: userName.length === 0,
    Password: Password.length === 0,
  };
}

class TextFields extends React.Component {
  constructor(props){
    super(props)

   this.state = {
      userName: '',
      Password: '',
      type:'admin'
    };

  }
  
  handleSubmit = (evt) => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    const { qrId} = this.state;
  }
  canBeSubmitted() {
    const errors = validate(this.state.qrId);
    const isDisabled = Object.keys(errors).some(x => errors[x]);
    return !isDisabled;
  }

  handleChange = name => event => {
    
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state)
  };

  handleClick = () => {
    console.log(this.state)

    if(this.state.type=='admin'){
    var details = {
     'name': this.state.userName,
     'password': this.state.Password,
     'type':this.state.type
 };
}
else
{
  var details = {
    'email': this.state.userName,
    'password': this.state.Password,
    'type':this.state.type
};
}
 

 var formBody = [];
 for (var property in details) {
   var encodedKey = encodeURIComponent(property);
   var encodedValue = encodeURIComponent(details[property]);
   formBody.push(encodedKey + "=" + encodedValue);
 }
 formBody = formBody.join("&");
 
 var reqtype = this.state.type.toString();
 fetch('/api/'+reqtype+'/login', {
   method: 'POST',
   headers: {
     'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
   },
   body: formBody
 }).then(res=>res.json())
 .then(res=>{
   console.log("we are in this function");
   if(res){
    console.log(res);
    console.log(res.token);
    sessionStorage.setItem('token',res.token);
     if(res.type==="emp"){
      console.log('Employee Login Successful');
      {this.props.updateEmployee(res.token)}
      //this.props.history.push('/cms/emp');
     }
     else if(res.type==='admin'){
      console.log('Admin Login Successful');
      {this.props.updateAdmin(res.token)}
      //this.props.history.push('/admin');
      
     }
     else{
       this.props.handleOpen();
       console.log("error");
     }
     console.log("After Login  function");
   };
 }
 );
      this.setState({
      userName:'',
      Password:'',
      type:'admin'
    })

  }
  //change function
  changeUsername = e => {
    this.setState({
      userName: e.target.value
    });
  };

  changePassword = e => {
    this.setState({
      Password: e.target.value
    });
}
  changeType = e => {
    this.setState({
      type: e.target.value
    });
  }

  logoutScreen = () => {
    this.props.logoutScreen()
  }


  render() {
    const { classes } = this.props;
    const errors = validate(this.state.userName,this.state.Password);
      const isDisabled = Object.keys(errors).some(x => errors[x]);


    return (
      <div>
           
    <Typography variant="display1" color="inherit" align="center" className={classes.typeobar}>
          Login to the System
        </Typography>
    <Card className={classes.card}>
     
    <form className={classes.container} noValidate autoComplete="off"> 
    <CardContent>
    <TextField
    id="User name"
    label="User Name"
    value={this.state.userName}
    placeholder="Enter User Name"
    className={classes.textField}
    onChange={e => this.changeUsername(e)}
    margin="normal"
  />
    </CardContent>
    <CardContent>
  <TextField
    id="Password"
    label="Password"
    value={this.state.Password}
    placeholder="Enter Password"
    onChange={e => this.changePassword(e)}
    className={classes.textField}
    type='password'
    margin="normal"
  />
</CardContent>
<CardContent>
<TextField
          id="type"
          select
          className={classes.textField}
          value={this.state.type}
          onChange={e=>this.changeType(e)}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your type"
          margin="normal"
        >
          {dropdowntypes.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
          </TextField>
</CardContent>

<CardContent>
  <Button variant="raised" color="primary" className={classes.button} onClick={this.handleClick.bind(this)} disabled={isDisabled}>
  Login
  </Button>
  </CardContent>
</form>
</Card>
      </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(TextFields);
