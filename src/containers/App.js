import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Header from '../components/Header';
import HomePage from '../components/HomePage';
import Signin from '../components/Signin';
import SentMessages from '../components/SentMessages';
import NewMessage from '../components/NewMessage';

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
            <Route exact path="/messages" component={SentMessages} />
            <Route exact path="/messages/new" component={NewMessage} />
            <Route path="/signin" component={Signin} />
          </div>
        </Router>
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
