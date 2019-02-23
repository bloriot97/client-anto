import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';

import { logOut } from '../actions/authActions'

class Header extends Component {

  constructor(props) {
    super(props);

    this.callLogOut = this.callLogOut.bind(this);
  }

  callLogOut(event) {
    this.props.logOut();
  }

  render () {
    const { isAuthenticated } = this.props;
    console.log(isAuthenticated)
    return (
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="title" color="inherit">
            News
          </Typography>
          {!isAuthenticated &&
            <Button href='./signin'  color="inherit">Login</Button>
          }
          {isAuthenticated &&
            <Button onClick={this.callLogOut} color="inherit">Logout</Button>
          }
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}


export default connect(null, { logOut })(Header);
