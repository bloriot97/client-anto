import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

import AddIcon from '@material-ui/icons/Add';

import MessageCard from './MessageCard';


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
  fab: {
    position: 'fixed',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
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
    const { items, classes } = this.props;

    return (
      <main className={classes.root}>
        <Typography variant="display2" component="h2">
          Messages envoyés
        </Typography>
        {
          items.map((message) => (
            <MessageCard message={message} />
          ))
        }
        <Tooltip title="New">
          <Button className={classes.fab} variant="fab" color="secondary">
            <AddIcon />
          </Button>
        </Tooltip>
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
