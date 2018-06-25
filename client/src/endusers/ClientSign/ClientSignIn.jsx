import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import {
  Link
  }   from 'react-router-dom';

const styles = {
  card: {
      height:'100%',
      width:'100%'
   },
  media: {
    paddingTop:'50%'
  },
  textField: {
    margin:'auto',
    marginLeft:'5%',
    align:'center',
    width: '85%',
  },
  cardcontent:{
    marginTop:'20%',
  },
  buttonLogin: {
    marginTop:'3%',
    marginLeft:'25%'
  },
  buttonSignup: {
    marginTop:'3%',
  },
  divMargin: {
     // marginTop:'5%',
      //marginLeft:'10%',
      //marginRight:'10%',
      margin:'7%'
  },
  /*divBackground:{
    backgroundImage:`url(${"https://rfclipart.com/image/big/45-77-91/striped-pattern-with-diagonal-lines-seamless-wallpaper-Download-Royalty-free-Vector-File-EPS-66694.jpg"})`,
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }*/


};

 class SimpleMediaCard extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:'',
        }
    }

   loginHandle = () => {
       
    console.log('email')
    console.log(this.state.email);
    console.log('password')
    console.log(this.state.password)

    this.setState({
        email:'',
        password:''
    })
   }


   signUpHandle = () => {
       console.log('signup handle')
   }

   operationSignUp = () => {
    this.props.history.push('/signup');
  }

   changeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  changePassword = e => {
    this.setState({
      password: e.target.value
    });
};

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.divBackground}>
            <div className={classes.divMargin}>
                <Grid container spacing={12}>
                <Grid item md={8} sm={12} xs={12}>
                 <Card raised={true}>
                 <CardMedia className={classes.media}
                image="https://static.olocdn.net/menu/applebees/c667aa8060427981c4a8d79502fda788.jpg"/>
                </Card>
                </Grid>
                <Grid item md={4} sm={12} xs={12} >
                <Card className={classes.card} raised={true}>
                 <CardContent className={classes.cardcontent}>
                <TextField
                  id="email"
                  label="Email"
                  placeholder="Enter Email"
                  className={classes.textField}
                  value={this.state.email}
                  margin="normal"
                  onChange={e => this.changeEmail(e)}
                />
                <TextField
                  id="password"
                  label="Password"
                  placeholder="Enter Password"
                  type="password"
                  className={classes.textField}
                  value={this.state.password}
                  margin="normal"
                  onChange={e => this.changePassword(e)}
                />
                </CardContent>
                <CardActions>
                    <Grid container spacing ={12}>
                    <Grid item md={6} sm={6} xs={6}>
                    <Button size="medium" onClick={this.loginHandle} className={classes.buttonLogin}>
                    Login
                    </Button>
                  </Grid>
                  <Grid item md={6} sm={6} xs={6}>
                <Button size="medium" onClick={this.operationSignUp} className={classes.buttonSignup}>
                    Sign Up
                  </Button>
                  </Grid>
                  </Grid>
                </CardActions>
                 </Card>
                 </Grid>
                 </Grid>
            </div>
            </div>
            
          );
        }
    }
  

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);