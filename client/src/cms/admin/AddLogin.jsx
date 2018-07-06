import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  button: {
    margin:theme.spacing.unit,
    display:'flex',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
  menu: {
    width: 200,
  },
  card: {
    marginLeft:100,
    marginRight:100,
    marginTop:10,
    //maxWidth: 350,
  },
});

function validate(fname,password,lname) {
  return {
    fname: fname.length === 0,
    password: password.length === 0,
    lname: lname.length === 0,
  };
}
class TextFields extends React.Component {
 
  constructor(props){
    
    const cachetoken = sessionStorage.getItem('token');
    super(props)
    this.state={
      fname: '',
      lname: '',
      sdate: new Date(),
      password: '',
      type:'admin',
      t:cachetoken,
      isDisabledshop:true,
      mobile:'',
      email:'',
    } 
   }
  

handleSubmit = (evt) => {
  if (!this.canBeSubmitted()) {
    evt.preventDefault();
    return;
  }
}
canBeSubmitted() {
  const errors = validate(this.state.fname,this.state.password,this.state.lname);
  const isDisabled = Object.keys(errors).some(x => errors[x]);
  return !isDisabled;
}
  handleChange = name => event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(this.state)
  };

  //change function
  changefirstname = e => {
    this.setState({
      fname: e.target.value
    });
  };

  
  changelastname = e => {
    this.setState({
      lname: e.target.value
    });
  }

  changepassword = e => {
    this.setState({
      password: e.target.value
    });
  }

  changeemail = e => {
    this.setState({
      email: e.target.value
    });
  }

  changemobile = e => {
    this.setState({
      mobile: e.target.value
    });
  }

 

  changeType = e => {
    this.setState({
      type: e.target.value,
    });
    if(e.target.value==='shop'){
      this.setState({
        isDisabledshop:false,
      })
    }
    else{
      this.setState({
        isDisabledshop:true
      })
    }
    console.log(this.state.isDisabledshop);
  }


  handleClick = () => {

    console.log(this.state.t);
    console.log(this.state.sdate);
  
      var details = {
        'token': this.state.t,
        'fname': this.state.fname,
        'lname': this.state.lname,
        'password':this.state.password,
        'phone':this.state.mobile,
        'email':this.state.email,
        'sdate':this.state.sdate,
   };
   
   var formBody = [];
   for (var property in details) {
     var encodedKey = encodeURIComponent(property);
     var encodedValue = encodeURIComponent(details[property]);
     formBody.push(encodedKey + "=" + encodedValue);
   }
   formBody = formBody.join("&");
   
   fetch('/api/admin/addEmployee', {
     method: 'POST',
     headers: {
       'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
     },
     body: formBody
   })
   .then(res=>res.json())
   .then(res=>{
     if(res){
      console.log(res);
      this.props.handleopen();
     }
     else {
       this.props.handleError();
     }
     ;
   }
   );
      //form saaf kia hai 
    this.setState({
      fname:'',
      lname:'',
      email:'',
      mobile:'',
    password:'',
      
    })
  }

    
  
  render() {
    const { classes } = this.props;
    const errors = validate(this.state.fname,this.state.lname,this.state.email,this.state.password);
      const isDisabled = Object.keys(errors).some(x => errors[x]);

    return (
      <div>
        <Typography variant="display2">Add a new Employee</Typography>
        <Card className={classes.card}>
      <form className={classes.container} noValidate autoComplete="off"> 
      <CardContent>
      <TextField
          id="firstname"
          label="FirstName"
          value={this.state.fname}
          placeholder="Enter First Name"
          className={classes.textField}
          onChange={e => this.changefirstname(e)}
          margin="normal"
          refs='name'
        />
        <TextField
          id="lname"
          label="Last Name"
          value={this.state.lname}
          placeholder="Enter Last Name"
          className={classes.textField}
          onChange={e => this.changelastname(e)}
          margin="normal"
          refs='name'
        />
        </CardContent>
      
        <CardContent>
        <TextField
          id="email"
          label="Email"
          value={this.state.email}
          placeholder="Enter Email"
          onChange={e => this.changeemail(e)}
          className={classes.textField}
          margin="normal"
        />
        </CardContent>

        <CardContent>
        <TextField
          id="mobile"
          label="mobile"
          value={this.state.mobile}
          placeholder="Enter Mobile"
          onChange={e => this.changemobile(e)}
          className={classes.textField}
          margin="normal"
        />
        </CardContent>


       
     
        <CardContent>
        <TextField
          id="password"
          label="Password"
          value={this.state.password}
          placeholder="Enter Password"
          onChange={e => this.changepassword(e)}
          className={classes.textField}
          margin="normal"
        />

        
        <Button variant="raised" color="primary" className={classes.button} onClick={this.handleClick} disabled={isDisabled}>
        <AddIcon/>
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
