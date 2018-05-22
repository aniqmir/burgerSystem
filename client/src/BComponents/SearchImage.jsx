import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Search from './SearchField';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
const styles = theme => ({
  card: {
    maxWidth:'100%'
  },
  media: {
    paddingTop:'15%'
  },
});


function PaperSheet(props) {
  const { classes } = props;
  return (
    <div>
      <Card>
        <CardMedia
        className={classes.media}
         image="https://static.olocdn.net/menu/applebees/c667aa8060427981c4a8d79502fda788.jpg">
         <CardContent >
         <Search/>
         </CardContent>
        </CardMedia>
      </Card>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);
