import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom'
import PropTypes from 'prop-types'

import SentMessages from '../components/SentMessages';



import { withRouter } from 'react-router-dom'


class PrivateRoute extends Component {
  constructor(props) {
    super(props);

    if (!this.props.isAuthenticated){
      this.props.history.push("/");
    }
  }

  componentDidUpdate(){
    if (!this.props.isAuthenticated){
      this.props.history.push("/");
    }
  }

  render () {
    // Add your own authentication on the below line.
    const {isAuthenticated} = this.props;

    return null;
  }
}

PrivateRoute.propTypes = {
}

function mapStateToProps(state) {

  const { isAuthenticated } = state.auth

  return {
    isAuthenticated,
  }
}

export default connect(mapStateToProps, {})(withRouter(PrivateRoute));
