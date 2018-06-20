import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import BuildBurger from './BuildBurger';
import CircularProgress from '@material-ui/core/CircularProgress';
import Cancel from '@material-ui/icons/Cancel';
import Tooltip from '@material-ui/core/Tooltip';
import {Container} from 'mdbreact';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import IconButton from '@material-ui/core/IconButton';


const styles = {
  card: {
    maxWidth: 350,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  divPad: {
    paddingTop:'10%',
    //paddingLeft: '5%',
    //paddingRight: '5%',
    paddingBottom:'5%',
    display: 'flex'
  },
  progress: {
    marginTop:'5px',
    marginBottom:'5px',
    marginLeft:'20%'
  },
  margin: {
  },
  button: {
    margin: '1px',
  },
};


class SimpleMediaCard extends React.Component {

  
  buyClickHandler = () => {
    console.log('buy')
    this.props.loadingHandle()
    this.props.callBackFunction("aniq form cild");
    
  }


  cancelHandler = () => {
    console.log('cancel')
    this.props.cancelHandler()
   
  }

 render() {
  const { classes } = this.props;
  let isstatusTrue = this.props.status;
  let loading = this.props.loading;

  
  return (
    <Container>
    <div className={classes.divPad}>
         <Tooltip  title="5.35$/-" placement="right-start">
      <Card className={classes.card} raised={true}>  
      <CardMedia
          className={classes.media}
          image={this.props.image}
          title="Burger"
        />
        <CardContent className={classes.cardcontent}> 
          <Typography gutterBottom variant="headline" component="h2" color="secondary">
            {this.props.name}
          </Typography>
          <Typography component="p" color='secondary'>
          {this.props.details}
          </Typography>
        </CardContent>
        {
          isstatusTrue ? (
            <CardActions className={classes.cardactions}>
            <Button size="small" variant="raised" color="secondary" onClick={this.buyClickHandler}>Buy</Button>
            <BuildBurger buildDetails={this.props.buildDetails}/>
            {/*<IconButton  variant='outlined' size='small' color='secondary' className={classes.button}><AddShoppingCartIcon /></IconButton>*/}
            </CardActions>
          )
         
        /*: loading ? (
          <CardActions className={classes.cardactions}>
            <Typography component="p" color='secondary'>Your Order is getting Ready</Typography>
            <Button size ="small" variant="flat" color="secondary" onClick={this.cancelHandler}><Cancel/></Button>
            <CircularProgress color="secondary" className={classes.progress} size={50} />
          </CardActions>
        )*/
        :  (
           <CardActions className={classes.cardactions}>
             (<Button size="small" variant="raised"  color="secondary" onClick={this.buyClickHandler}>Buy</Button>)
            </CardActions> 
        )  
        } 
      </Card>
      </Tooltip>
    </div>
    </Container>
  );

 }

 
}

SimpleMediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleMediaCard);
