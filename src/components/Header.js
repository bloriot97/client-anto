import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';

import { logOut } from '../actions/authActions'

const styles = theme => ({
  right: {
  },
  title: {
    flexGrow: 1,
  },
});

class Header extends Component {

  constructor(props) {
    super(props);

    this.callLogOut = this.callLogOut.bind(this);
  }

  callLogOut(event) {
    this.props.logOut();
  }

  render () {
    const { isAuthenticated, classes } = this.props;
    return (
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="title" color="inherit" className={classes.title}>
            Aura
          </Typography>
          {!isAuthenticated &&
            <Button href='./login'  color="inherit">Login</Button>
          }
          {isAuthenticated &&
            <Button onClick={this.callLogOut} color="inherit" className={classes.right}>Logout</Button>
          }
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}


export default withStyles(styles)(connect(null, { logOut })(Header));
