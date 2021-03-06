import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Checkbox from '@material-ui/core/Checkbox';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { MuiThemeProvider, createMuiTheme,withStyles } from '@material-ui/core/styles';


const theme = createMuiTheme ({
typography: {
// Use the system font instead of the default Roboto font.
fontFamily: [
  'Bangers'
].join(','),
}, })

const styles = {
  root: {
    width: '100%',
    position: 'relative',
    overflow: 'auto',
    maxHeight: 250,
  },
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
  cardLeft: {
    width: '100%',
    height:'500px'
  },
  cardRight: {
    height:'100%',
    width:'100%',
    backgroundColor:'#E0E0E0'
  },
 // text:{
   // color:'inherit',
   // paddingTop:'15px',
    //textShadow: ' 0 0 20px #0000FF'
  //},
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    height: '100%',
  },
  dialog: {
    width:'85%',
    paddingLeft:'15%'
  },
  paper: {
  },
  button: {
    margin:'auto',
  }
};

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class FullScreenDialog extends React.Component {
  state = {
    open: false,
    ing:false,
    extradetails:'',
    ingredients: [],
    ingredients2:[],
    tempIng:[],
  };
   
  handleChange = name => event => {
    
    this.setState({ 
      [name]: event.target.checked, 
      ing:!this.state.ing
                  });
    var newArr = this.state.ingredients;
                  newArr.push(name)
    this.setState({
     ingredients:newArr,
                  })
    console.log(this.state.ingredients)
    this.ingredientsCheck();
  };

  ingredientsCheck = () => {
    var i,j;
    var len = this.state.ingredients.length;
    var newArr = this.state.ingredients;
    var newArr2 = [];
    for(i=0;i<len;i++){
      var count=0;
      for(j=0;j<len;j++){
        if(newArr[i]===newArr[j])
        {
          count=count+1;
        }
      }
      if(count%2!==0) {
        newArr2.push(newArr[i])
      }
    }
    this.setState({
      ingredients2:newArr2
    })
    console.log(this.state.ingredients);
  }

  ingredientstoMainpage = () => {
    let ing = this.state.ingredients2;
    let itemDetail=[]
    itemDetail.push(this.props.name);
    itemDetail.push(this.props.price);
    itemDetail.push(this.props.details);
    itemDetail.push(this.props.image);
    itemDetail.push(this.props.status);
    itemDetail.push(ing);
    this.props.ingUpdate(itemDetail);
    this.setState({
      ingredients:[],
      ingredients2:[],
      chicken:false,
      cheese:false,
      open:false,

    })
  }

  handleClickOpen = () => {
      let temp = []
      Object.values(this.props.ingredients).map((type,key)=>{
            temp.push(type)
      })
      console.log(temp);
    
    this.setState({ 
      open: true,
      tempIng:temp, 
  });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChangeExtra = e => {
    this.setState({
      extradetails: e.target.value
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <MuiThemeProvider theme={theme}>
        <Button size='small'variant='raised' onClick={this.handleClickOpen} color='secondary'>Build</Button>
        <Dialog
          fullWidth={true}
          maxWidth={false}
          className={classes.dialog}
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >
        <Grid container spacing={12}>
          <Grid item md={4} sm={12} xs={12}>
        <Card className={classes.cardLeft}>
        <CardMedia
          className={classes.media}
          image="https://truffle-assets.imgix.net/0d26ee59-813-lucyjuicycrunchburger-land1.jpg"
          title="Burger"
        />
          </Card>
          </Grid>

          <Grid item md={8} sm={12} xs={12}>
          <Card className={classes.cardRight}>
          <CardContent>
          <Typography className={classes.text} gutterBottom variant="display2" component="h2">
           {this.props.name}
          </Typography>
          <Typography  gutterBottom variant="p">
           {this.props.buildDetails}
          </Typography>
          <Paper className={classes.paper} elevation={8}>
          <List className={classes.root}>
          <Grid container spacing={12}>
           
           
                  {/*
                    Object.values((this.props.ingredients)).map((type,key)=>{
                      return (
                        <ListItem>
                        <Typography>{type.split(" ")}</Typography>
                        <Checkbox
                        checked={this.state.ing}
                        onChange={this.handleChange(type.split(" "))}
                        value={type.split("")}
                      />
                      </ListItem>
                      )
                       })
                      */ }
                       <Grid item md={6} sm={12} xs={12}>
                      {
                        (this.state.tempIng[0]!==0) ? (
                          <ListItem>
                          <Typography>{this.state.tempIng[0]}</Typography>
                          <Checkbox
                          checked={this.state.ing0}
                          onChange={this.handleChange(this.state.tempIng[0])}
                          value={this.state.tempIng[0]}
                          />
                          </ListItem>
                        )
                        : (
                          <ListItem>
                          </ListItem>
                        )
                      }
                      </Grid>
                      <Grid item md={6} sm={12} xs={12}>
                    
                    {
                        (this.state.tempIng[1]!==0) ? (
                          <ListItem>
                          <Typography>{this.state.tempIng[1]}</Typography>
                          <Checkbox
                          checked={this.state.ing1}
                          onChange={this.handleChange(this.state.tempIng[1])}
                          value={this.state.tempIng[1]}
                          />
                          </ListItem>
                        )
                        : (
                          <ListItem>
                          </ListItem>
                        )
                      }
                      </Grid>
                      <Grid item md={6} sm={12} xs={12}>
                          {
                        (this.state.tempIng[2]!==0) ? (
                          <ListItem>
                          <Typography>{this.state.tempIng[2]}</Typography>
                          <Checkbox
                          checked={this.state.ing2}
                          onChange={this.handleChange(this.state.tempIng[2])}
                          value={this.state.tempIng[2]}
                          />
                          </ListItem>
                        )
                        : (
                          <ListItem>
                          </ListItem>
                        )

                      }
                      </Grid>
                      <Grid item md={6} sm={12} xs={12}>
                          {
                        (this.state.tempIng[3]) ? (
                          <ListItem>
                          <Typography>{this.state.tempIng[3]}</Typography>
                          <Checkbox
                          checked={this.state.ing3}
                          onChange={this.handleChange(this.state.tempIng[3])}
                          value={this.state.tempIng[3]}
                          />
                          </ListItem>
                        )
                        : (
                          <ListItem>
                          </ListItem>
                        )
                      }
                      </Grid>
                      <Grid item md={6} sm={12} xs={12}>
                          {
                        (this.state.tempIng[4]) ? (
                          <ListItem>
                          <Typography>{this.state.tempIng[4]}</Typography>
                          <Checkbox
                          checked={this.state.ing4}
                          onChange={this.handleChange(this.state.tempIng[4])}
                          value={this.state.tempIng[4]}
                          />
                          </ListItem>
                        )
                        : (
                          <ListItem>
                          </ListItem>
                        )
                      }
                      </Grid>
                      <Grid item md={6} sm={12} xs={12}>
                             {
                        (this.state.tempIng[5]) ? (
                          <ListItem>
                          <Typography>{this.state.tempIng[5]}</Typography>
                          <Checkbox
                          checked={this.state.ing5}
                          onChange={this.handleChange(this.state.tempIng[5])}
                          value={this.state.tempIng[5]}
                          />
                          </ListItem>
                        )
                        : (
                          <ListItem>
                          </ListItem>
                        )
                      }
                      </Grid>
                      <Grid item md={6} sm={12} xs={12}>
                                                      {
                        (this.state.tempIng[6]) ? (
                          <ListItem>
                          <Typography>{this.state.tempIng[6]}</Typography>
                          <Checkbox
                          checked={this.state.ing6}
                          onChange={this.handleChange(this.state.tempIng[6])}
                          value={this.state.tempIng[6]}
                          />
                          </ListItem>
                        )
                        : (
                          <ListItem>
                          </ListItem>
                        )
                      }
                      </Grid> 
                      <Grid item md={6} sm={12} xs={12}>          {
                        (this.state.tempIng[7]) ? (
                          <ListItem>
                          <Typography>{this.state.tempIng[7]}</Typography>
                          <Checkbox
                          checked={this.state.ing7}
                          onChange={this.handleChange(this.state.tempIng[7])}
                          value={this.state.tempIng[7]}
                          />
                          </ListItem>
                        )
                        : (
                          <ListItem>
                          </ListItem>
                        )
                      }
                      </Grid>
            </Grid>
          </List>
          </Paper>
          </CardContent>
          <CardContent>
          <TextField
          id="extra details"
          label="Extra Details"
          multiline
          rowsMax="4"
          fullWidth
          value={this.state.extradetails}
          onChange={e=>this.handleChangeExtra(e)}
          color='secondary'
          margin="normal"
          />
         </CardContent>
          <CardActions>
          <Button className={classes.button} variant='outlined' size='medium' onClick={this.ingredientstoMainpage}>Done</Button>
          <Button className={classes.button} variant='outlined' size='medium' onClick={this.handleClose}>Cancel</Button>
          </CardActions>
          </Card>
          </Grid>
           </Grid>
        </Dialog>
        </MuiThemeProvider>
      </div>
    );
  }
  }

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullScreenDialog);