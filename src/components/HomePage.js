import React, { Component } from 'react'

import { connect } from 'react-redux'

import { withStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";

const styles = theme => ({
  root: {
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    width: 'auto',
    [theme.breakpoints.up(800 + theme.spacing.unit * 3 * 2)]: {
      width: 800,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

class HomePage extends Component {
  /* constructor(props) {
    super(props);
  }*/
  constructor(props) {
    super(props);

    if (this.props.isAuthenticated){
      this.props.history.push("/messages");
    } else {
      this.props.history.push("/login");
    }
  }

  render () {
    const { classes } = this.props;

    return (
      <main className={classes.root}>
        <Paper className={classes.paper}>
          <Typography variant="headline" component="h1">
            Home
          </Typography>
          <Button href='./messages' variant="contained" color="primary" className={classes.button}>
            MEssages envoyés
          </Button>
        </Paper>
      </main>
    )
  }
}

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}

function mapStateToProps(state) {
  const { isAuthenticated } = state.auth

  return {
    isAuthenticated,
  }
}

export default connect(mapStateToProps)(withStyles(styles)(HomePage));
