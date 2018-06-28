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
import axios from 'axios';
const styles = theme => ({
  button: {
    margin:theme.spacing.unit,
    display:'flex',
    marginLeft: 600,
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
  input: {
    display: '',
    marginTop: 40,
  } ,
});
const dropdowntypes = [
  {
    value:true ,
    label: 'Can be Built',
  },
  {
    value:false ,
    label: 'Can not be build' ,
  },
];
function validate(name,desc,type,price) {
  return {
    name: name.length === 0,
    desc: desc.length === 0,
    type: type.length === 0,
    price: price.length === 0,
  };
}
class TextFields extends React.Component {
constructor(props){
super(props);
var today = new Date(),
date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
const cachetoken = sessionStorage.getItem('token');  
this.state = {
    name:'',
    desc: '',
    date: date,
    type: '',
    price:'',
    build: true,
    selectedFile: '',
    t:cachetoken,
  }
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
  onChangeFile = (e) => {
    switch (e.target.name) {
      case 'selectedFile':
        this.setState({ selectedFile: e.target.files[0] });
        break;
      default:
        this.setState({ [e.target.name]: e.target.value });  
    }
  }
  
  onSubmit = (e) => {
    const { name,desc,date,type,price,build,selectedFile,token } = this.state;
    let formData = new FormData();

    formData.append('name', name);
    formData.append('desc', desc);
    formData.append('date', date);
    formData.append('type', type);
    formData.append('price', price);
    formData.append('build', build);
    formData.append('image', selectedFile);
    formData.append('token', token);
    

    axios.post('/api/admin/addItem', formData)  
    .then(result => {
        console.log("we are in this function");
        if(result){
         console.log(result.data);
          this.props.handleopen();
          console.log("After function");
        }
        else {
          this.props.handleError();
        }
        this.setState({
          name:'',
          desc: '',
          date: '',
          type: '',
          price:'',
          build: '',
          t: '',
          selectedFile: '',     
        })   
      });
  }
  render() {
    const { classes } = this.props;
    const errors = validate(this.state.name,this.state.desc,this.state.type,
      this.state.price);
      const isDisabled = Object.keys(errors).some(x => errors[x]);
      const { name,desc,date,type,price,build,selectedFile,token } = this.state;
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
          helperText="Please Identify if This item can be Customized or not?"
          margin="normal"
        >
          {dropdowntypes.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
          </TextField>     
      <input
      accept="image/*"
      className={classes.input}
      id="raised-button-file"
      type="file"
      name="selectedFile"
      onChange={this.onChangeFile}
         />
        <Button variant="raised" color="primary" className={classes.button} onClick={this.onSubmit} disabled={isDisabled}>
        ADD
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
