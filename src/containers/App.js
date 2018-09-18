import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Header from '../components/Header';
import Signin from '../components/Signin';

class App extends Component {
  render() {
    const { isAuthenticated } = this.props
    return (
      <div className="App">
        <Header
          isAuthenticated={isAuthenticated}
        />
        <Signin/>
      </div>
    );
  }
}

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}

function mapStateToProps(state) {

  const { auth } = state
  const { isAuthenticated } = auth

  return {
    isAuthenticated,
  }
}

export default connect(mapStateToProps)(App)
