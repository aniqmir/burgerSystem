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


function validate(fname,lname,email,password) {
  return {
   fname : fname.length === 0,
   lname:lname.lenght === 0,
   email : email.lenght === 0,
   password : password.length === 0
  };
}
class TextFields extends React.Component {

  state = {
    fname: '',
    password: '',
    cnic: '',
    type:'admin',
    t:this.props.token,
    lname:'',
    phone:'',
    date:new Date(),
    email:'',
  }


handleSubmit = (evt) => {
  if (!this.canBeSubmitted()) {
    evt.preventDefault();
    return;
  }
}
canBeSubmitted() {
  const errors = validate(this.state.username,this.state.password,this.state.cnic);
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
  changefName = e => {
    this.setState({
      fname: e.target.value
    });
  };
  changelName = e => {
    this.setState({
      lname: e.target.value
    });
  };

  changepassword = e => {
    this.setState({
      password: e.target.value
    });
  }

  changecnics = e => {
    this.setState({
      cnic: e.target.value
    });
  }

  changecity = e => {
    this.setState({
      city: e.target.value
    });
  }

  changezip = e => {
    this.setState({
      zip: e.target.value
    });
  }
  changephone = e => {
    this.setState({
      phone: e.target.value
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

  changenationality = e => {
    this.setState({
      nationality: e.target.value
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

  changeShopID = e => {
    this.setState({
      shopID: e.target.value
    })
  }

  changeShopAddress = e => {
    this.setState({
      shopaddress: e.target.value
    })
  }

  changestate = e => {
    this.setState({
      countryState: e.target.value
    })
  }

  changecountry = e => {
    this.setState({
      country: e.target.value
    })
  }

  changeaddres = e => {
    this.setState({
      address: e.target.value
    })
  }

  handleClick = () => {
    console.log(this.props.token);
    //api call to store data in database here
      console.log(this.state)
      var details = {
       'fname': this.state.fname,
       'lname':this.state.lname,
       'email': this.state.email,
       'password':this.state.password,
        'sdate':this.state.date,
        'token':this.state.t,
        'phone':this.state.phone
        
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
  
     console.log("we are in this function");
     if(res){
      console.log(res);
      this.props.handleopen();
       console.log("After function");
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
      password:'',
      phone:'',
      isDisabled:true,
      date:'',
      mobile:'',
      email:'',
     
    })
  }

    
  
  render() {
    const { classes } = this.props;
    const errors = validate(this.state.fname,this.state.lname,this.state.email,this.state.password);
      const isDisabled = Object.keys(errors).some(x => errors[x]);

    return (
      <div>
        <Typography variant="display2">Dispatch Order </Typography>
       
        <Card className={classes.card}>
      <form className={classes.container} noValidate autoComplete="off"> 
      <CardContent>
      <TextField
          id="fname"
          label="Order Number"
          value={this.state.fname}
          placeholder="Enter Order Number "
          className={classes.textField}
          onChange={e => this.changefName(e)}
          margin="normal"
          refs='name'
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
