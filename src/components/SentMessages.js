import React, { Component } from 'react'

import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

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

  render () {
    const { classes } = this.props;
    return (
      <main className={classes.root}>
        <Paper className={classes.paper}>
          hey
        </Paper>
      </main>
    )
  }
}

export default connect(null, { })(withStyles(styles)(SentMessages));
