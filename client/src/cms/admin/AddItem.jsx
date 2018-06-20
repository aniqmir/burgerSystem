import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuItem from 'material-ui/Menu/MenuItem';
import TextField from 'material-ui/TextField';
import Divider from 'material-ui/Divider';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';
import Icon from 'material-ui/Icon';
import Typography from 'material-ui/Typography';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Grid from '@material-ui/core/Grid';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';


const styles = theme => ({
  button: {
    margin:theme.spacing.unit,
    display:'flex',
    marginTop: '5%'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '25%',
    marginTop: '5%'
  },
  textField2: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '25%',
    marginTop: '6%'
  },
  menu: {
    width: 200,
  },
});

const dropdowntypes = [
  {
    value: 'Burger',
    label: 'Burger',
  },
  {
    value: 'Drinks',
    label: 'Drinks',
  },
 
];



function validate(name,type,price) {
  return {
    name: name.length === 0,
    type: type.length === 0,
    price: price.length === 0
  };
}

class TextFields extends React.Component {

    state = {
    name: '',
    type: 'Burger',
    price: '',
    newid: '',
    date:new Date(),
    t:this.props.token,
    QRImg: {},
    isDisabled:true,
    isDisabledsize:true,
    size:'large',
    resid:null
  };

  handleSubmit = (evt) => {
    if (!this.canBeSubmitted()) {
      evt.preventDefault();
      return;
    }
    const { name,type,price,newid} = this.state;
  }
  canBeSubmitted() {
    const errors = validate(this.state.name,this.state.type,this.state.price);
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

  changeType = e => {
    console.log(e.target.value);
    this.setState({
      type: e.target.value
    });
    if(e.target.value==-'Women Clothing')
    {
      this.setState({

        newid:'pw-wc-',
        isDisabledsize:true,
      })
    }
    if(e.target.value==='Men Clothing')
    {
      this.setState({
        newid:'pw-gc-',
        isDisabledsize:false,
      })
    }
    if(e.target.value==='Jewelry')
    {
      this.setState({
        newid:'pw-jw-',
        isDisabledsize:true,
      })
    }
    if(e.target.value==='Ladies Bag')
    {
      this.setState({
        newid:'pw-lb-',
        isDisabledsize:true,
      })
    }
    if(e.target.value==='Peshawari Chappal')
    {
      this.setState({
        newid:'pw-pc-',
        isDisabledsize:false,
      })
    }
    if(e.target.value==='Home Decor')
    {
      this.setState({
        newid:'pw-hd-',
        isDisabledsize:true,
      })
    }
  }

  changePrice = e => {
    this.setState({
      price: e.target.value
    });
  }

  changesize = e => {
    this.setState({
      size:e.target.value
    })
  }

  list = {}
  qrimg = null
  handleClick = () => {
 
    console.log(this.qrimg);
    console.log(this.state);
    console.log(this.props.token);
    //api call to store data in database here
      console.log(this.state)
      var details = {
       'name': this.state.name,
       'price': this.state.price,
       'type':this.state.type,
        'newid':this.state.newid,
        'date':this.state.date,
        'token':this.state.t,
        'size':this.state.size
   };
  
  }

    //posting data to api call here
  render() {
    const { classes } = this.props;
    const errors = validate(this.state.name,this.state.type,this.state.price,this.state.newid);
      const isDisabled = Object.keys(errors).some(x => errors[x]);

    return (
      <div>
          
              <List>
        



        <form className={classes.container} noValidate autoComplete="off"> 
      <ListItem>
      <TextField
         id="name"
         label="Name"
         value={this.state.name}
         placeholder="Item Name"
         className={classes.textField}
         onChange={e => this.changeName(e)}
         margin="normal"
         refs='name'
         
       />
       </ListItem>
       <Divider/>
       <ListItem>
      <TextField
         id="price"
         label="Price"
         value={this.state.price}
         placeholder="Item Price"
         className={classes.textField}
         onChange={e => this.changePrice(e)}
         margin="normal"
         refs='price'
         
       />
       </ListItem>
       <Divider/>
       <ListItem>
       
       <TextField
          id="type"
          select
          className={classes.textField2}
          value={this.state.type}
          onChange={e=>this.changeType(e)}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          margin="normal"
        > {dropdowntypes.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
          </TextField>
          </ListItem>
     
        
     <Divider/>
         
     <ListItem>
         <input type="file" name="upload"/>
         </ListItem>
         <Divider/>
         
     
         <ListItem>
       <Button variant="raised" color="primary" className={classes.button} onClick={this.handleClick} disabled={isDisabled}>
       <AddIcon/> Add Item
       </Button>
       </ListItem>
       
       

     
     </form>
     </List>
    
      </div>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFields);
