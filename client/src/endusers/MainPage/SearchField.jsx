import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import purple from '@material-ui/core/colors/purple';
import Paper from '@material-ui/core/Paper';
import Search from '@material-ui/icons/Search';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  btn:{
    paddingTop:'1%'
  },
  paperroot:{
      width:"50%",
      textAlign:'center',
      margin:'auto',
  },
  cssLabel: {
    '&$cssFocused': {
      color: purple[500],
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: purple[500],
    },
  },
  bootstrapRoot: {
    'label + &': {
      margin: 'auto',
      position:'absolute'
    },
  },
  bootstrapInput: {
    borderRadius: 4,
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 12px',
    width: 'calc(100% - 24px)',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
});




class CustomizedInputs extends React.Component {
 
    constructor(props){
      super(props)
      this.state={
        search:'',
        data:this.props.data,
        
        }
      }

    handleChange = (e) => {
      this.setState({
        search:e.target.value.substr(0,20)
      }) 
      console.log(this.props.searchHandleTrue)
      let arr = this.state.data;
      let filterdData = Object.values(arr).map(
        data => {
          return data.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
        }
        
      ) 

      console.log(filterdData);  
  }
    

            

    render() {
      const { classes } = this.props;

      return (
        <Paper className={classes.paperroot}>
        <Grid container spacing={12}>
        <Grid item md={10} sm={6} xs={12}>
        <TextField
        //label="Search"
        id="search"
        placeholder="Search..."
        type='search'
       
        InputProps={{
          disableUnderline: true,
          classes: {
            root: classes.bootstrapRoot,
            input: classes.bootstrapInput,
          },
        }}
        onChange={e=>this.handleChange(e)}
        InputLabelProps={{
          shrink: true,
          className: classes.bootstrapFormLabel,
        }}
  
        fullWidth
      />
      </Grid>
      <Grid item md={2} sm={6} xs={12}>
      <Button><Search/></Button>{/*<SearchDialog button={this.state.button}/>*/}
      </Grid>
      </Grid>
      </Paper>
      );
  }
};
export default withStyles(styles)(CustomizedInputs);