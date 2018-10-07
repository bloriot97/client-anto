import { SIGN_IN_ERROR, SIGN_IN_SUCESS, LOG_OUT_SUCESS } from './types'
import { getUri } from '../api'


export const signIn = (userData) => (dispatch) => {
  console.log(JSON.stringify(userData))
  fetch(getUri('/auth/login'), {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData),
  }).then((res) => res.json()).catch((err) => console.log(err))
    .then((res) => {
      if (res.status === 'error'){
        console.log(res)

        console.log('invalide login!')
        dispatch({
          type: SIGN_IN_ERROR
        })
      } else {
        console.log(res)
        localStorage.setItem('token', res.token);
        dispatch({
          type: SIGN_IN_SUCESS,
          payload: res,
        })
      }

    })
}

export const logOut = () => (dispatch) => {
  localStorage.setItem('token', '');
  dispatch({
    type: LOG_OUT_SUCESS,
  })
}
