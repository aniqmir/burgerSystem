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
      marginTop:'5%',
      marginLeft:'10%',
      marginRight:'10%',
  },
  bgImage: {
    backgroundImage:`url(${"https://imageresizer.static9.net.au/7PEZE_-FEeeife-33FAB3atcYaM=/1024x0/http%3A%2F%2Fprod.static9.net.au%2F_%2Fmedia%2FNetwork%2FImages%2F2017%2F06%2F16%2F09%2F55%2F170617coach_hot_chips.jpg"})`,
    minHeight: '100vh',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
},
transbox : {
    backgroundColor: '#ffffff',
    //border: '1px solid black',
    opacity: '0.5',
    filter: 'alpha(opacity=60)' /* For IE8 and earlier */
  }
};

 class SimpleMediaCard extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            email:'',
            password:'',
        }
    }

   signUpHandle = () => {
       console.log('signup handle')
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
            <div className={classes.bgImage}>
                <Grid container spacing = {12}>
                    <Grid item md={6} sm={6} xs={6}>
                    <Card className={classes.transbox}>
                    <CardContent>
                        Personal Information
                        </CardContent>
                    </Card>
                    </Grid>
                    <Grid item md={6} sm={6} xs={6}>
                    <Card className={classes.transbox}>
                    <CardContent>
                        Card Information
                    </CardContent>
                    </Card>
                    </Grid>
                </Grid>
           </div>
          );
        }
    }
  

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);