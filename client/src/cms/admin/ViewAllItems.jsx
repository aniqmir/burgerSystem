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


 
    removeProduct = (pk) =>
    {
        console.log(pk);
        
        var details = {
          'pk': pk,
          'token': sessionStorage.getItem('token'),
        };
          
     var formBody = [];
     for (var property in details) {
       var encodedKey = encodeURIComponent(property);
       var encodedValue = encodeURIComponent(details[property]);
       formBody.push(encodedKey + "=" + encodedValue);
     }
     formBody = formBody.join("&");
     
     fetch('/api/admin/delItem', {
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
     

    
    fetch('/api/admin/allitems', {
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
       this.setState({
         data:res
       })
      };
    }
    );
  
    
  }
  constructor(props){
    super(props)
    this.state={
      data:{},
      t:this.props.token,
    }
    this.removeProduct = this.removeProduct.bind(this)
};

  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
      <Typography variant="display2"> All Items</Typography>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <CustomTableCell>Name</CustomTableCell>
              <CustomTableCell numeric>Description</CustomTableCell>
              <CustomTableCell numeric>Type</CustomTableCell>
              <CustomTableCell numeric>Price</CustomTableCell>
              <CustomTableCell numeric>Operation</CustomTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/*data replaced with json pacakage from api*/}
            {
               Object.values(this.props.data).map((type,index) => {
                 return (
                  <TableRow className={classes.row} key={index}>
                    <CustomTableCell>{type.item_name}</CustomTableCell>
                    <CustomTableCell numeric> {type.item_desc} </CustomTableCell>
                    <CustomTableCell numeric>{type.item_type}</CustomTableCell>
                    <CustomTableCell numeric>{type.item_price}</CustomTableCell>
                    <CustomTableCell numeric> <IconButton className={classes.button} aria-label="Delete" onClick={this.removeProduct.bind(this,type.primaryKey)}>
                    <DeleteIcon />
                    </IconButton>
                    </CustomTableCell>
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
