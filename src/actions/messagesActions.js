import { FETCH_MESSAGES, NEW_MESSAGE_SENT, NEW_MESSAGE_ERROR } from './types'
import { openSnackbar } from "./snackbarActions";
import { getUri } from '../api'

export const fetchMessages = () => (dispatch) => {
  fetch(getUri('/messages'), {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'authorization': `Bearer ${localStorage.getItem("token")}`
    },
  }).then((res) => res.json()).catch((err) => console.log(err))
    .then((res) => {
        console.log(res)
        dispatch({
            type: FETCH_MESSAGES,
            payload: res,
        })


    })
}

export const createMessage = (message) => (dispatch) => {
  fetch(getUri('/messages'), {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'content-type': 'application/json',
      'authorization': `Bearer ${localStorage.getItem("token")}`
    },
    body: JSON.stringify(message),
  }).then((res) => res.json())
      .catch((err) => {
          console.log(err)
          dispatch(openSnackbar({message: "Ah !", variant: 'error'}))
          dispatch({
              type: NEW_MESSAGE_ERROR,
          })
      })
    .then((res) => {
        if (res !== undefined){
            dispatch(openSnackbar({message: "Message envoyé !", variant: 'success'}))
            dispatch({
                type: NEW_MESSAGE_SENT,
            })
        }
    })
}
