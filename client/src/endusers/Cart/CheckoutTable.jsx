import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: 'orange',
    color: theme.palette.common.black,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginBottom:'5%'
  },
});

class CustomizedTable extends React.Component {
    state={
        data:[],
        total:0
    }

    componentWillMount() {
        let tempSessionCart = JSON.parse(localStorage.getItem('cartItems'));
        let tempTotal = parseInt(localStorage.getItem('total'),10);
        console.log(tempSessionCart)
        this.setState({
            data:tempSessionCart,
            total:tempTotal
        });


    }
    render() {
      const { classes } = this.props;
 
      return (
        <Paper className={classes.root}>
          <Table >
            <TableHead>
              <TableRow>
                <CustomTableCell>Item Name</CustomTableCell>
                <CustomTableCell>Price</CustomTableCell>
                <CustomTableCell >Quantity</CustomTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.values(this.state.data).map((type,index) => {
                return (
                  <TableRow key={index}>
                    <CustomTableCell >
                      {type[0]}
                    </CustomTableCell>
                    <CustomTableCell >
                      {type[1]}
                    </CustomTableCell>
                    <CustomTableCell>{type[6]}</CustomTableCell>
                  </TableRow>
                );
              })}
              
              <TableRow>
                    <CustomTableCell >
                     
                    </CustomTableCell>
                    <CustomTableCell >
                      Total
                    </CustomTableCell>
                    <CustomTableCell>
                      {this.state.total}
                    </CustomTableCell>
              </TableRow>
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