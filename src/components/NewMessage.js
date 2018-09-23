import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import { createMessage } from '../actions/messagesActions'

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
});

class NewMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      to: '',
      content: '',
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit(event) {
    event.preventDefault();

    const message = {
      to: this.state.to,
      content: this.state.content,
    }
    this.props.createMessage(message);

  }

  render () {
    const { classes } = this.props;

    return (
      <main className={classes.root}>
        <Paper className={classes.paper}>
          <Typography variant="title" gutterBottom>
            Nouveau message
          </Typography>
          <form onSubmit={this.onSubmit}>
            <Grid container spacing={24}>
              <Grid item xs={12} md={12}>
                <TextField required id="cardName" label="Destinataire" name="to" onChange={this.onChange} value={this.state.to} fullWidth />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField required id="cardName" label="Message" name="content" onChange={this.onChange} value={this.state.content} fullWidth />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="raised"
              color="primary"
              className={classes.submit}
            >
              Envoyer
            </Button>
          </form>
        </Paper>
      </main>
    )
  }
}

NewMessage.propTypes = {
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, { createMessage })(withStyles(styles)(NewMessage));
