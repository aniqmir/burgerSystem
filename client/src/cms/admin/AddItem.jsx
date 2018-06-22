import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from 'material-ui/Icon';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
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

const dropdowntypes = [
  {
    value: 'admin',
    label: 'Admin',
  },
  {
    value: 'head',
    label: 'Head',
  },
  {
    value: 'shop',
    label: 'Shop',
  },
];

function validate(username,password,cnic) {
  return {
    userName: username.length === 0,
    password: password.length === 0,
    cnic: cnic.length === 0,
  };
}
class TextFields extends React.Component {

  state = {
    username: '',
    password: '',
    cnic: '',
    type:'admin',
    t:this.props.token,
    shopID:'',
    isDisabledshop:true,
    shopaddress:'',
    city:'',
    countryState:'',
    zip:'',
    phone:'',
    nationality:'',
    country:'',
    mobile:'',
    email:'',
    address:''
  }


handleSubmit = (evt) => {
  if (!this.canBeSubmitted()) {
    evt.preventDefault();
    return;
  }
  const {qrId} = this.state;
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
  changeuserName = e => {
    this.setState({
      username: e.target.value
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
       'name': this.state.username,
       'type': this.state.type,
       'password':this.state.password,
        'cnic':this.state.cnic,
        'shopID':this.state.shopID,
        'token':this.state.t,
        'shopaddress':this.state.shopaddress,
        'city':this.state.city,
        'countrystate':this.state.countryState,
        'zip':this.state.zip,
        'phone':this.state.phone,
        'nationality':this.state.nationality,
        'country':this.state.country,
        'mobile':this.state.mobile,
        'email':this.state.email,
        'address':this.state.address,
   };
   
   var formBody = [];
   for (var property in details) {
     var encodedKey = encodeURIComponent(property);
     var encodedValue = encodeURIComponent(details[property]);
     formBody.push(encodedKey + "=" + encodedValue);
   }
   formBody = formBody.join("&");
   
   fetch('/head/AddEmp', {
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
      username:'',
      password:'',
      cnic:'',
      type:'',
      isDisabledshop:true,
      shopaddress:'',
      city:'',
      state:'',
      zip:'',
      phone:'',
      nationality:'',
      country:'',
      mobile:'',
      email:'',
      address:'',
      countryState:''
    })
  }

    
  
  render() {
    const { classes } = this.props;
    const errors = validate(this.state.username,this.state.password,this.state.cnic);
      const isDisabled = Object.keys(errors).some(x => errors[x]);

    return (
      <div>
        <Typography variant="display2">Add a new Item</Typography>
        <Card className={classes.card}>
      <form className={classes.container} noValidate autoComplete="off"> 
      <CardContent>
      <TextField
          id="name"
          label="Name"
          value={this.state.username}
          placeholder="Enter Item Name"
          className={classes.textField}
          onChange={e => this.changeuserName(e)}
          margin="normal"
          refs='name'
        />
        </CardContent>
        <CardContent>
        <TextField
          id="price"
          label="Price"
          value={this.state.password}
          placeholder="Enter Price"
          onChange={e => this.changepassword(e)}
          className={classes.textField}
          margin="normal"
        />
        </CardContent>
        <CardContent>
        <TextField
          id="des"
          label="Description"
          value={this.state.cnic}
          placeholder="Enter Description "
          onChange={e => this.changecnics(e)}
          className={classes.textField}
          margin="normal"
        />
        </CardContent>
        <CardContent>
        <TextField
          id="ingredients"
          label="Ingredients"
          value={this.state.city}
          placeholder="Enter Ingredients"
          onChange={e => this.changecity(e)}
          className={classes.textField}
          margin="normal"
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
