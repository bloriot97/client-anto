import { SIGN_IN, SIGN_IN_ERROR, SIGN_IN_SUCESS, LOG_OUT_SUCESS } from '../actions/types'

const initialState = {
  token: '',
  isAuthenticated: localStorage.getItem('token') ? true : false
}

export default function(state = initialState, action) {
  switch(action.type){
    case SIGN_IN:
      return {
        ...state,
      };
    case SIGN_IN_ERROR:
      return {
        ...state,
        isAuthenticated: false,
      };
    case SIGN_IN_SUCESS:
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
      };
    case LOG_OUT_SUCESS:
      return {
        ...state,
        token: '',
        isAuthenticated: false,
      };
    default:
      return state;
  }
}
