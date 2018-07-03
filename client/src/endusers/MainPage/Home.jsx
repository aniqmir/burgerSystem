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
import Tooltip from '@material-ui/core/Tooltip';
import {Container} from 'mdbreact';


const styles = {
  card: {
   width:'100%',
   height:'80%',
   overflow:'hidden'
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
    display: 'flex',
    
  },
  cardcontent: {
    width:'100%',
    height:'100px',
    overflowY:'scroll',
    overflowX:'hidden'
  },
  button: {
    margin: '1px',
  },
};



class SimpleMediaCard extends React.Component {
 

  buyClickHandler = () => {
    let det = []
    det.push(this.props.name);
    det.push(this.props.price);
    det.push(this.props.details);
    det.push(this.props.image);
    det.push(this.props.status);
    det.push(this.props.itemId);
    det.push(1);
    this.props.checkoutDet(det)
  
  }


  cancelHandler = () => {
    console.log('cancel')
   
  }


 render() {
  const { classes } = this.props;
  let isstatusTrue = this.props.status;
  

  return (
    <Container >
    <div className={classes.divPad}>
         <Tooltip  title={this.props.price} placement="right-start">
      <Card className={classes.card} raised={true}>  
      <CardMedia
          className={classes.media}
          image={this.props.image}
          title="Burger"
        />

        <CardContent> 
          <Typography variant="headline" component="h2" color="secondary">
            {this.props.name}
          </Typography>
          </CardContent>
        <CardContent className={classes.cardcontent}>
          <Typography component="caption" color='secondary'>
          {this.props.details}
          </Typography>
        </CardContent>
        
        {
          isstatusTrue ? (
            <CardActions className={classes.cardactions}>
            <Button size="small" variant="raised" color="secondary" onClick={this.buyClickHandler} >Buy</Button>
            <BuildBurger   details={this.props.details} buildDetails={this.props.buildDetails} ingUpdate={this.props.checkoutDet} name={this.props.name} price={this.props.price} image={this.props.image}/>
            {/*<IconButton  variant='outlined' size='small' color='secondary' className={classes.button}><AddShoppingCartIcon /></IconButton>*/}
            </CardActions>
          )

        :  (
           <CardActions className={classes.cardactions}>
             (<Button size="small" variant="raised"  color="secondary" onClick={this.buyClickHandler} >Buy</Button>)
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
