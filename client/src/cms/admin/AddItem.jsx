 import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import AddIcon from '@material-ui/icons/Add';
import Card, {  CardContent } from 'material-ui/Card';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
        'Poppins'
    ].join(','),
  },
});


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
function validate(name,desc,type,price,selectedFile) {
  return {
    name: name.length === 0,
    desc: desc.length === 0,
    type: type.length === 0,
    price: price.length === 0,
    selectedFile: selectedFile.length===0,
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
    build: false,
    selectedFile:'',
    t:cachetoken,
    checkBuild:true,
    ingredient1:'',
    ingredient2:'',
    ingredient3:'',
    ingredient4:'',
    ingredient5:'',
    ingredient6:'',
    ingredient7:'',
    ingredient8:'',
  }
}
  


handleSubmit = (evt) => {
  if (!this.canBeSubmitted()) {
    evt.preventDefault();
    return;
  }
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
    
    if(!(this.state.desc.length>100))
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
      build: e.target.value,
      checkBuild:!this.state.checkBuild
    });
    
  }

  changeIngredient1 = e => {
    this.setState({
      ingredient1: e.target.value
    });
  }

  
  changeIngredient2 = e => {
    this.setState({
      ingredient2: e.target.value
    });
  }

  
  changeIngredient3 = e => {
    this.setState({
      ingredient3: e.target.value
    });
  }

  
  changeIngredient4 = e => {
    this.setState({
      ingredient4: e.target.value
    });
  }

  
  changeIngredient5 = e => {
    this.setState({
      ingredient5: e.target.value
    });
  }

  changeIngredient6 = e => {
    this.setState({
      ingredient6: e.target.value
    });
  }

  
  changeIngredient7 = e => {
    this.setState({
      ingredient7: e.target.value
    });
  }

  
  changeIngredient8 = e => {
    this.setState({
      ingredient8: e.target.value
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
    const { name,desc,date,type,price,build,selectedFile,t} = this.state;
    let tempIngredients = []
    tempIngredients.push(this.state.ingredient1);
    tempIngredients.push(this.state.ingredient2);
    tempIngredients.push(this.state.ingredient3);
    tempIngredients.push(this.state.ingredient4);
    tempIngredients.push(this.state.ingredient5);
    tempIngredients.push(this.state.ingredient6);
    tempIngredients.push(this.state.ingredient7);
    tempIngredients.push(this.state.ingredient8);
    let formData = new FormData();

    formData.append('name', name);
    formData.append('desc', desc);
    formData.append('date', date);
    formData.append('type', type);
    formData.append('price', price);
    formData.append('build', build);
    formData.append('image', selectedFile);
    formData.append('token', t);
    formData.append('buildIngredients',tempIngredients);
    
    console.log(this.state.t);

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
          type: '',
          price:'',
          build: false,
          selectedFile:'',
          ingredient1:'',
          ingredient2:'',
          ingredient3:'',
          ingredient4:'',
          ingredient5:'',     
          ingredient6:'',
          ingredient7:'',
          ingredient8:'',
        })   
      });
  }
  render() {
    const { classes } = this.props;
    const errors = validate(this.state.name,this.state.desc,this.state.type,
      this.state.price,this.state.selectedFile);
      const isDisabled = Object.keys(errors).some(x => errors[x]);
    return (
      <MuiThemeProvider theme={theme}>
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
      //value= {this.state.selectedFile}
      id="raised-button-file"
      type="file"
      name="selectedFile"
      onChange={this.onChangeFile}
         />
         

          <Grid container spacing={12}>
            <Grid item md={3}>
              <TextField
              id="ingredient # 1"
              placeholder="ingredient # 1"
              margin="normal"
              disabled={this.state.checkBuild}
              value={this.state.ingredient1}
              onChange={e=>this.changeIngredient1(e)}

              />
            </Grid>
            <Grid item md={3}>
              <TextField
                id="ingredient # 2"
                placeholder="ingredient # 2"
                margin="normal"
                disabled={this.state.checkBuild}
                value={this.state.ingredient2}
              onChange={e=>this.changeIngredient2(e)}
              />
            </Grid>
            <Grid item md={3}>
              <TextField 
                id="ingredient # 3"
                placeholder="ingredient # 3"
                margin="normal"
                disabled={this.state.checkBuild}
                  value={this.state.ingredient3}
                  onChange={e=>this.changeIngredient3(e)}
                
              />
            </Grid>
            <Grid item md={3}>
              <TextField 
                id="ingredient # 4"
                placeholder="ingredient # 4"
                margin="normal"              
                disabled={this.state.checkBuild}
                value={this.state.ingredient4}
              onChange={e=>this.changeIngredient4(e)}
              />
            </Grid>
          </Grid>
          <Grid container spacing={12}>
            <Grid item md={3}>
              <TextField
              id="ingredient # 5"
              placeholder="ingredient # 5"
              margin="normal"
              disabled={this.state.checkBuild}
              value={this.state.ingredient5}
              onChange={e=>this.changeIngredient5(e)}
              />
            </Grid>
            <Grid item md={3}>
              <TextField
                id="ingredient # 6"
                placeholder="ingredient # 6"
                margin="normal"
                disabled={this.state.checkBuild}
                value={this.state.ingredient6}
              onChange={e=>this.changeIngredient6(e)}
              />
            </Grid>
            <Grid item md={3}>
              <TextField 
                id="ingredient # 7"
                placeholder="ingredient # 7"
                margin="normal"              
                disabled={this.state.checkBuild}
                value={this.state.ingredient7}
              onChange={e=>this.changeIngredient7(e)}
              />
            </Grid>
            <Grid item md={3}>
              <TextField 
                id="ingredient # 8"
                placeholder="ingredient # 8"
                margin="normal"              
                disabled={this.state.checkBuild}
                value={this.state.ingredient8}
              onChange={e=>this.changeIngredient8(e)}
              />
            </Grid>
          </Grid>

        <Button variant="raised" color="primary" className={classes.button} onClick={this.onSubmit} disabled={isDisabled}>
        ADD
        <AddIcon/>
        </Button>
        </CardContent>
        </form>
      </Card>
      </div>
      </MuiThemeProvider>
    );
  }
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(TextFields);
  