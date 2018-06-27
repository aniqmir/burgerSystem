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
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import axios, { post } from 'axios';
const styles = theme => ({
  button: {
    margin:theme.spacing.unit,
    display:'flex',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    marginTop: '-35px', 
  },
  Addheader:{
   display: 'flex',
   marginTop: '30px',
   marginLeft: '20px',
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
    marginTop:25,
    //maxWidth: 350,
  },
});
const dropdowntypes = [
  {
    value: true,
    label: 'Can be Built',
  },
  {
    value: false,
    label: 'Can not be build' ,
  },
];
function validate(userName) {
  return {
    userName: userName.length === 0,
  };
}
class TextFields extends React.Component {
constructor(props){
super(props);
var today = new Date(),
date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  this.state = {
    name:'',
    desc: '',
    type: '',
    price:'',
    build: '',
    //image: '',
    date: date,
    t:this.props.token,
  }
 // this.onFormSubmit = this.onFormSubmit.bind(this)
 // this.onChange = this.onChange.bind(this)
 // this.fileUpload = this.fileUpload.bind(this)
}
  


handleSubmit = (evt) => {
  if (!this.canBeSubmitted()) {
    evt.preventDefault();
    return;
  }
  const {qrId} = this.state;
}
canBeSubmitted() {
  const errors = validate(this.state.name);
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
  changeName = e => {
    this.setState({
      name: e.target.value
    });
  };

  changedesc = e => {
    this.setState({
      desc: e.target.value
    });
  }

  changedate = e => {
    this.setState({
      date: e.target.value
    });
  }

  changetype = e => {
    this.setState({
      type: e.target.value
    });
  }

  changeprice = e => {
    this.setState({
      price: e.target.value
    });
  }
  
  changeBuild = e => {
    this.setState({
      build: e.target.value
    });
  }
  changeimage = e => {
    this.setState({
      image: e.target.value
    });
  }

  
  handleClick = () => {
    //api call to store data in database here
      console.log(this.state)
      var details = {
       'name': this.state.name,
       'desc': this.state.desc,
       'type': this.state.type,
       'price': this.state.price,
       'date': this.state.date,
       'build': this.state.build,
   };
   
   var formBody = [];
   for (var property in details) {
     var encodedKey = encodeURIComponent(property);
     var encodedValue = encodeURIComponent(details[property]);
     formBody.push(encodedKey + "=" + encodedValue);
   }
   formBody = formBody.join("&");
   
   fetch('/api/admin/addItem', {
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
      //this.props.handleopen();
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
      name:'',
      desc: '',
      date: '',
      type: '',
      price:'',
      build: '',
      //image: '',     
    })
  }

    
  
  render() {
    const { classes } = this.props;
    const errors = validate(this.state.name);
      const isDisabled = Object.keys(errors).some(x => errors[x]);

    return (
      <div>
          <AppBar className={classes.appBar}>
      <Toolbar>
        <Typography variant="title" color="inherit" noWrap>
          Powered By NerdWare
        </Typography>
      </Toolbar>
    </AppBar>

        <Card className={classes.card}>
        <Typography variant="display2" gutterBottom className={classes.Addheader}>Add a new Item</Typography>
      <form className={classes.container} noValidate autoComplete="off"> 
      <CardContent >
      <TextField
          id="name"
          label="Name"
          value={this.state.name}
          placeholder="Enter Item Name"
          className={classes.textField}
          onChange={e => this.changeName(e)}
          margin="normal"
          refs='name'
        />
      <TextField
          id="desc"
          label="Discription"
          value={this.state.desc}
          placeholder="Enter Details"
          className={classes.textField}
          onChange={e => this.changedesc(e)}
          margin="normal"
          refs='desc'
        />
       <TextField
          id="type"
          label="Type"
          value={this.state.type}
          placeholder="Enter Item Type"
          className={classes.textField}
          onChange={e => this.changetype(e)}
          margin="normal"
          refs='type'
        />
        <TextField
          id="price"
          label="Price"
          value={this.state.price}
          placeholder="Enter Item Price"
          className={classes.textField}
          onChange={e => this.changeprice(e)}
          margin="normal"
          refs='price'
        />  
        <TextField
          id="build"
          select
          className={classes.textField}
          value={this.state.build}
          onChange={e=>this.changeBuild(e)}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please Identify if it can be Customized or not?"
          margin="normal"
        >
          {dropdowntypes.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
          </TextField>      
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
