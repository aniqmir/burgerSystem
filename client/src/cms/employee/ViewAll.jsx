import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

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
    var details = {
      'token':this.state.t
  };
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
    super(props)
    this.state={
      data:{},
      t:this.props.token,
    }
 


    
    console.log('Constructor');
    console.log(this.state.t);

    
};

  render() {
    const { classes } = this.props;
    return (<div>
      <Typography variant="display2"> All Orders</Typography>
      <Paper className={classes.root}>
      
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Order ID</CustomTableCell>
              <CustomTableCell numeric>Description</CustomTableCell>
              <CustomTableCell numeric>Order Time </CustomTableCell>
             
            </TableRow>
          </TableHead>
          <TableBody>
            {/*data replaced with json pacakage from api*/}
            {
               Object.values(this.state.data).map((type) => {
                 console.log(type.Emp_fname);
                 console.log(type.Emp_password);
                 console.log(type.Emp_lname);
                 console.log(type.Emp_email);
                 return (
                  <TableRow className={classes.row} key={type.Emp_cnic}>
                    <CustomTableCell>2345</CustomTableCell>
                    <CustomTableCell numeric> --------------------------- </CustomTableCell>
                    <CustomTableCell numeric>12:09</CustomTableCell>
                   
                  </TableRow>
                );
              })
            }
            {/* {data.map(n => {
              return (
                <TableRow className={classes.row} key={n.id}>
                  <CustomTableCell>{n.name}</CustomTableCell>
                  <CustomTableCell numeric>{n.calories}</CustomTableCell>
                  <CustomTableCell numeric>{n.fat}</CustomTableCell>
                  <CustomTableCell numeric>{n.carbs}</CustomTableCell>
                  <CustomTableCell numeric>{n.protein}</CustomTableCell>
                </TableRow>
              );
            })} */}
          </TableBody>
        </Table>
      </Paper>
     
      </div>
    );
  }
}


CustomizedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomizedTable);
