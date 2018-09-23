import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';



import { fetchMessages } from '../actions/messagesActions'

const styles = theme => ({
  root: {
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    marginTop: theme.spacing.unit * 3,
    width: 'auto',
    [theme.breakpoints.up(500 + theme.spacing.unit * 3 * 2)]: {
      width: 500,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  card: {
    minWidth: 300,
    marginTop: theme.spacing.unit
  },
});


class SentMessages extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchMessages();
  }

  render () {
    const { classes } = this.props;
    const messages = this.props.items.map((message) => (
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
    ));
    return (
      <main className={classes.root}>
        <Typography variant="display2" component="h2">
          Messages envoyés
        </Typography>
        {messages}
      </main>
    )
  }
}

SentMessages.propTypes = {
  items: PropTypes.array.isRequired,
}

function mapStateToProps(state) {

  const { messages } = state
  const { items } = messages

  return {
    items,
  }
}

export default connect(mapStateToProps, { fetchMessages })(withStyles(styles)(SentMessages));
