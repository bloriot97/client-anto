import { LOG_IN, LOG_IN_ERROR, LOG_IN_SUCESS, LOG_OUT_SUCESS } from '../actions/types'

const initialState = {
  token: '',
  isAuthenticated: localStorage.getItem('token') ? true : false
}

export default function(state = initialState, action) {
  switch(action.type){
    case LOG_IN:
      return {
        ...state,
      };
    case LOG_IN_ERROR:
      return {
        ...state,
        isAuthenticated: false,
      };
    case LOG_IN_SUCESS:
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
