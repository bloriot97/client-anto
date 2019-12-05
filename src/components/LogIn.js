import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom'
import { withStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Avatar from '@material-ui/core/Avatar';

import red from '@material-ui/core/colors/red';

import LockIcon from '@material-ui/icons/LockOutlined';

import { logIn } from '../actions/authActions'

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
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {

  },
  submit: {
    marginTop: '20px',
    marginBottom: '20px',
  },
  loginError:{
    color: red[500],
  },
});


class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    if (this.props.isAuthenticated){
      this.props.history.push("/");
    }
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  componentDidUpdate(){
    if (this.props.isAuthenticated){
      this.props.history.push("/");
    }
  }

  onSubmit(event) {
    event.preventDefault();

    const user = {
      username: this.state.username,
      password: this.state.password,
    }
    this.props.logIn(user);

  }

  render () {

    const { classes, authError} = this.props;
    return (
      <main className={classes.root}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockIcon />
          </Avatar>
          <Typography variant="headline" component="h3">
            Connexion
          </Typography>
          <form className={classes.form} onSubmit={this.onSubmit}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="username">Nom d&#39;utilisateur</InputLabel>
              <Input id="username" name="username" onChange={this.onChange} value={this.state.username} autoFocus />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Mot de passe</InputLabel>
              <Input
                name="password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.onChange}
                value={this.state.password}
              />
            </FormControl>
            { authError &&
              <Typography variant="caption" className={classes.loginError}>
                Erreur de connexion.
              </Typography>
            }
            <Button
              type="submit"
              fullWidth
              variant="raised"
              color="primary"
              className={classes.submit}
            >
              Se connecter
            </Button>
          </form>
        </div>
      </main>
    )
  }
}

Auth.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  authError: PropTypes.bool.isRequired,
}

function mapStateToProps(state) {

  const { isAuthenticated, authError } = state.auth

  return {
    isAuthenticated,
    authError,
  }
}

export default connect(mapStateToProps, { logIn })(withStyles(styles)(withRouter(Auth)));
