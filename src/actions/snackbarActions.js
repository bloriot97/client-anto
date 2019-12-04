import { SNACKBAR_OPEN, SNACKBAR_CLOSED } from './types'


export const openSnackbar = (message) => (dispatch) => {
    dispatch({
        type: SNACKBAR_OPEN,
        payload: message,
    })
}

export const closeSnackbar = () => (dispatch) => {
    dispatch({
        type: SNACKBAR_CLOSED,
    })
}
