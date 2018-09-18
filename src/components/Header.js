import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

class Header extends Component {
  render () {
    const { isAuthenticated } = this.props;
    console.log(isAuthenticated)
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            News
          </Typography>
          {!isAuthenticated &&
            <Button color="inherit">Login</Button>
          }

          {isAuthenticated &&
            <Button color="inherit">Logout</Button>
          }
        </Toolbar>
      </AppBar>
    );
  }
}

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}


export default Header;
