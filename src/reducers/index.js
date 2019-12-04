import { combineReducers } from 'redux'
import authReducer from './authReducer'
import messagesReducer from './messagesReducer'
import snackbarReducer from './snackbarReducer'

export default combineReducers({
  auth: authReducer,
  messages: messagesReducer,
  snackbar: snackbarReducer,
});
