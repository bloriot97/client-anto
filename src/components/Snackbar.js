import React, { Component } from 'react'

import { withStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import WarningIcon from '@material-ui/icons/Warning';

import Snackbar from '@material-ui/core/Snackbar';
import SnackbarContent from '@material-ui/core/SnackbarContent';

import PropTypes from "prop-types";
import {connect} from "react-redux";

import { amber, green } from '@material-ui/core/colors';

import { closeSnackbar } from '../actions/snackbarActions'

const styles = theme => ({
    success: {
        backgroundColor: green[600],
    },
    error: {
        backgroundColor: theme.palette.error.dark,
    },
    info: {
        backgroundColor: theme.palette.primary.main,
    },
    warning: {
        backgroundColor: amber[700],
    },
    close: {
        padding: 0.5 * theme.spacing.unit,
    },
    icon: {
        fontSize: 20,
        opacity: 0.9,
        marginRight: theme.spacing.unit,
        transform: 'translate(0px, 5px)'
    },
});

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
};


class SimpleSnackbar extends Component {
    constructor(props) {
        super(props);

        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.props.closeSnackbar();
    };

    render () {
        const { classes, isOpen, message, variant } = this.props;
        const Icon = variantIcon[variant];

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
                >
                    <SnackbarContent
                        className={classes[variant]}
                        message={<span id="message-id"> <Icon className={classes.icon}/> {message} </span>}
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
                </Snackbar>
            </div>
        )
    }
}

SimpleSnackbar.propTypes = {
    isOpen: PropTypes.bool.isRequired,
}

function mapStateToProps(state) {
    const { isOpen, message, variant } = state.snackbar

    return {
        isOpen,
        message,
        variant,
    }
}

export default connect(mapStateToProps, {closeSnackbar})(withStyles(styles)(SimpleSnackbar));
