import { FETCH_MESSAGES } from '../actions/types'

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
    default:
      return state;
  }
}
