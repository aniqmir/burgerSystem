import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/Menu/MenuItem';
import Typography from 'material-ui/Typography';
import Input from 'material-ui/Input';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import CancelIcon from '@material-ui/icons/Cancel';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ClearIcon from '@material-ui/icons/Clear';
import Chip from 'material-ui/Chip';
import List, { ListItem, ListItemAvatar, ListItemText } from 'material-ui/List';
import Dialog, { DialogTitle } from 'material-ui/Dialog';
import Divider from 'material-ui/Divider';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#00838F',
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
    
  },
  rowt: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#90CAF9',
    },
    
  },
});

let id = 0;
function createData(name, sr, qty, price) {
  id += 1;
  return { id, name, sr, qty, price};
}

const data = [
  createData('Item name . . . . ', 184937, 56, 2450),
  createData('Item name . . . . ', 184937, 56, 2450),
  createData('Item name . . . . ', 184937, 56, 2450),
  createData('Item name . . . . ', 184937, 56, 2450),
  createData('Item name . . . . ', 184937, 56, 2450),
 
 
];


const suggestions = [].map(suggestion => ({
  value: suggestion.label,
  label: suggestion.label,
  price : suggestion.price,
  id:suggestions.id
}));
var row = [].map(row => ({
  value: row.label,
  label : row.label,
  price:row.price,
  id:row.id
}));

class Option extends React.Component {
  handleClick = event => {
    this.props.onSelect(this.props.option, event);
  };

  render() {
    const { children, isFocused, isSelected, onFocus } = this.props;

    return (
      <MenuItem
        onFocus={onFocus}
        selected={isFocused}
        onClick={this.handleClick}
        component="div"
        style={{
          fontWeight: isSelected ? 500 : 400,
        }}
      >
        {children}
      </MenuItem>
    );
  }
}
function SelectWrapped(props) {
  const { classes, ...other } = props;

  return (
    <h1/>
  );
}
class  CustomizedTable extends React.Component {
  componentDidMount(){
    
    var details = {
      'token':this.state.t,
      'shopID':this.state.shop,
    
  };
  console.log(details);
   {/*} var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    
    fetch('/shop/shopinventory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
      },
      body: formBody
    })
    .then(res=>res.json())
    .then(res=>{
      if(res){
       this.setState({
         data:res
       })
       this.updateSuggestions();
       console.log(suggestions);
        console.log("Response : ");
        console.log(res);
      };
    }
    );
  */}
  };


  updateSuggestions= () =>
  {
    Object.values(this.state.data).map((type,i) => {
      console.log(type)
      suggestions.push({value:type.item_name,label:type.item_name,price:type.price,id:type.item_id})
    })
  }
  handleChange = name => value => {
    if(value && name){
    this.setState({
      [name]: value,
    });
    row.splice(0,1);
   var x;
    for(var i=0;i<suggestions.length;i++)
    {
      if(suggestions[i].value == value)
      {
        console.log("selected is at index ");
        console.log(i);
        x = i;
      }
    }
    console.log("Selected item details");
    console.log(suggestions[x]);
    row.push({value:suggestions[x].value,label:suggestions[x].label,price:suggestions[x].price,id:suggestions[x].id});
  }
  else
  {
    row.splice(0,1);
  }
  };
  handleClose = () =>
  {
    row.splice(0,1);
  }
  constructor(props){
    super(props);
    this.child = React.createRef();
    this.state={
      data:{},
      t:this.props.token,
      shop:this.props.shop,
      
      
    }
    
    console.log('Constructor');
    console.log(this.state.t);

    var details = {
      'token':this.state.t,
      'shopID':this.state.shop
  };
};

  render()
  {
    const { classes } = this.props;  

  return (
    <Paper className={classes.root}>
   
    <Input
          
          inputComponent={SelectWrapped}
          value={this.state.single}
          onChange={this.handleChange('single')}
          placeholder="Search Items"
          id="react-select-single"
          inputProps={{
            classes,
            name: 'react-select-single',
            instanceId: 'react-select-single',
            simpleValue: true,
            options: suggestions,
          }}
          style={{width:'20%' }}
        />
        
      <Table className={classes.table}>
        <TableHead>
        <TableRow>
            <CustomTableCell>Item Name</CustomTableCell>
            <CustomTableCell numeric>ID #</CustomTableCell>
            <CustomTableCell numeric>Price (Rs)</CustomTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow className={classes.row}>
            <CustomTableCell>Zinger Burger</CustomTableCell>
            <CustomTableCell numeric>394849</CustomTableCell>
            <CustomTableCell numeric>4550</CustomTableCell>
        </TableRow>
        <TableRow className={classes.row}>
            <CustomTableCell>Zinger Burger</CustomTableCell>
            <CustomTableCell numeric>394849</CustomTableCell>
            <CustomTableCell numeric>4550</CustomTableCell>
        </TableRow>
        <TableRow className={classes.row}>
            <CustomTableCell>Zinger Burger</CustomTableCell>
            <CustomTableCell numeric>394849</CustomTableCell>
            <CustomTableCell numeric>4550</CustomTableCell>
        </TableRow>
        <TableRow className={classes.row}>
            <CustomTableCell>Zinger Burger</CustomTableCell>
            <CustomTableCell numeric>394849</CustomTableCell>
            <CustomTableCell numeric>4550</CustomTableCell>
        </TableRow>
        <TableRow className={classes.row}>
            <CustomTableCell>Zinger Burger</CustomTableCell>
            <CustomTableCell numeric>394849</CustomTableCell>
            <CustomTableCell numeric>4550</CustomTableCell>
        </TableRow>
        {
          Object.values(row).map((tr,i)=>{
            return(<TableRow className={classes.rowt}  key={i}>
            
                    <CustomTableCell>{tr.value}</CustomTableCell>
                    <CustomTableCell numeric>{tr.id}</CustomTableCell>
                    <CustomTableCell numeric>{tr.price}</CustomTableCell>
             
             
             
      </TableRow>
      )
          })}
          <Divider/>
          </TableBody>
          <TableBody>
          
          {/*data replaced with json pacakage from api*/}
          {
               Object.values(this.state.data).map((type,i) => {
                console.log(type)
                 
                 return (
                  <TableRow className={classes.row}  key={i}>
                    <CustomTableCell>{type.item_name}</CustomTableCell>
                    <CustomTableCell numeric>{type.item_id}</CustomTableCell>
                    <CustomTableCell numeric>{type.price}</CustomTableCell>
                  </TableRow>
                );
              })
            }
        </TableBody>
      </Table>
      
    </Paper>
  );
}
}

CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
