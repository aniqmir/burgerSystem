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

const styles = {
  card: {
    margin:'auto',
    align:'center',
    maxWidth: '100vh',
    marginTop:'15%'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  textField: {
    margin:'auto',
    marginLeft:'5%',
    align:'center',
    width: '85%',
  },
  button: {
    //margin: 'auto',
    marginTop:'3%',
    marginLeft:'75%',
  },
   MainCard: {
      maxWidth:'100%',
    backgroundImage:`url(${"https://imageresizer.static9.net.au/7PEZE_-FEeeife-33FAB3atcYaM=/1024x0/http%3A%2F%2Fprod.static9.net.au%2F_%2Fmedia%2FNetwork%2FImages%2F2017%2F06%2F16%2F09%2F55%2F170617coach_hot_chips.jpg"})`
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
            <div>
            <Card className={classes.MainCard}>
              <Card className={classes.card} raised={true}>
                <CardContent>
                <TextField
                  id="email"
                  label="Email"
                  placeholder="Enter Email"
                  className={classes.textField}
                  value={this.state.email}
                  margin="normal"
                  onChange={e => this.changeEmail(e)}
                />
                </CardContent>
                <CardContent>
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
                 <Button variant="outlined" size="medium" onClick={this.loginHandle} className={classes.button}>
                    Login
                  </Button>
                </CardActions>
              </Card>
              </Card>
            </div>
          );
        }
    }
  

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);