import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { fetchMessages } from '../actions/messagesActions'

const styles = theme => ({
  root: {
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    width: 'auto',
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
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
      <div key={message["_id"]}>
        <h3> {message.content} </h3>
        <p> {message.sent_at} </p>
        qsd
      </div>
    ));
    return (
      <main className={classes.root}>
        <Paper className={classes.paper}>
          messages
          {messages}
        </Paper>
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
