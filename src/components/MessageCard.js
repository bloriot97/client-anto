import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types'

import Tooltip from '@material-ui/core/Tooltip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  card: {
    minWidth: 300,
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
});

class MessageCard extends Component {

  render() {
    const { message, classes } = this.props;
    return (
      <Card key={message["_id"]} className={classes.card}>
        <CardContent>
          <Typography variant="headline" component="h2">
            {message.to}
            {message.read_at &&
              "✅"
            }
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            {message.sent_at}
          </Typography>
          <Typography component="p">
            {message.content}
          </Typography>
        </CardContent>
      </Card>
    );
  }

}

MessageCard.propTypes = {
  message: PropTypes.object.isRequired,
}

export default withStyles(styles)(MessageCard);
