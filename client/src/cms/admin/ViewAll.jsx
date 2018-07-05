import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: '#3F51B5',
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
});


class CustomizedTable extends React.Component {

  
  componentDidMount(){
    const cachetoken = sessionStorage.getItem('token');
     
    var details = {
      t:cachetoken,
      'token':this.state.t
  };

  this.removeProduct = (email) =>
  {
      console.log(email);
      
      var details = {
        'Email': email,
        'token': sessionStorage.getItem('token'),
      };
        
   var formBody = [];
   for (var property in details) {
     var encodedKey = encodeURIComponent(property);
     var encodedValue = encodeURIComponent(details[property]);
     formBody.push(encodedKey + "=" + encodedValue);
   }
   formBody = formBody.join("&");
   
   fetch('/api/admin/delEmployee', {
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
    
  }

 
    var formBody = [];
    for (var property in details) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");
    
    fetch('/api/admin/Employeeindex', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8' 
      },
      body: formBody
    })
    .then(res=>res.json())
    .then(res=>{
      console.log("we are in this function");
      console.log(this.state.t);
      if(res){
       console.log(res);
       this.setState({
         data:res
       })
        console.log("After function");
        console.log(this.state.t);
      };
    }
    );

  };

  constructor(props){
    const cachetoken = sessionStorage.getItem('token');
    super(props)
    this.state={
      data:{},
      t:cachetoken,
    }
    
};
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
      <Typography variant="display2"> All Employees</Typography>
      
      

        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>First Name</CustomTableCell>
              <CustomTableCell numeric>Email</CustomTableCell>
              <CustomTableCell numeric>Mobile Number</CustomTableCell>
              <CustomTableCell numeric>Operation</CustomTableCell>
             
              </TableRow>
          </TableHead>
          <TableBody>
            {Object.values(this.state.data).map((type) => {  
                 return (
                  <TableRow className={classes.row} key={type.Emp_cnic}>
                    <CustomTableCell>{type.Emp_fname}</CustomTableCell>
                    <CustomTableCell numeric>{type.Email}</CustomTableCell>
                    <CustomTableCell numeric>{type.Emp_phone}</CustomTableCell>
                    <IconButton className={classes.button} aria-label="Delete" onClick={this.removeProduct.bind(this,type.Email)}>
                <DeleteIcon />
                </IconButton>
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