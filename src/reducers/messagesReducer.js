import { FETCH_MESSAGES, NEW_MESSAGE_SENT } from '../actions/types'

const initialState = {
  items: []
}

export default function(state = initialState, action) {
  switch(action.type){
    case FETCH_MESSAGES:
      return {
        ...state,
        items: action.payload
      };
    case NEW_MESSAGE_SENT:
      return {
        ...state,
        messageSent: true,
      };
    default:
      return state;
  }
}
