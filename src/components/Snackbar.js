import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from "prop-types";
import {connect} from "react-redux";

import { closeSnackbar } from '../actions/snackbarActions'

const styles = theme => ({
    close: {
        padding: 0.5 * theme.spacing.unit,
    },
});


class SimpleSnackbar extends Component {
    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.props.closeSnackbar();
    };

    render () {
        const { classes, isOpen, message } = this.props;

        return (
            <div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={isOpen}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id"> {message} </span>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="close"
                            color="inherit"
                            className={classes.close}
                            onClick={this.handleClose}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
            </div>
        )
    }
}

SimpleSnackbar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
}

function mapStateToProps(state) {
    const { isOpen, message } = state.snackbar

    return {
        isOpen,
        message,
    }
}

export default connect(mapStateToProps, {closeSnackbar})(withStyles(styles)(SimpleSnackbar));
