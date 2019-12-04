import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Header from '../components/Header';
import HomePage from '../components/HomePage';
import LogIn from '../components/LogIn';
import SentMessages from '../components/SentMessages';
import NewMessage from '../components/NewMessage';
import Snackbar from '../components/Snackbar';
import PrivateRoute from '../components/PrivateRoute';

import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    const { isAuthenticated } = this.props
    return (
      <div className="App">
        <Header
          isAuthenticated={isAuthenticated}
        />
        <Router>
          <div>
            <Route exact path="/" component={HomePage} />
            <Route path="/messages" component={PrivateRoute} />
            <Route exact path="/messages" component={SentMessages} />
            <Route exact path="/messages/new" component={NewMessage} />
            <Route path="/login" component={LogIn} />
          </div>
        </Router>
        <Snackbar/>
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
