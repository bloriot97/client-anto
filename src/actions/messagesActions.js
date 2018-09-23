import { FETCH_MESSAGES, NEW_MESSAGE } from './types'

export const fetchMessages = () => (dispatch) => {
  fetch('http://localhost:3003/api/v1/messages', {
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
  fetch('http://localhost:3003/api/v1/messages', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'content-type': 'application/json',
      'authorization': `Bearer ${localStorage.getItem("token")}`
    },
    body: JSON.stringify(message),
  }).then((res) => res.json()).catch((err) => console.log(err))
      .then((message) => dispatch({
        type: NEW_MESSAGE,
        payload: message,
      }))
}
