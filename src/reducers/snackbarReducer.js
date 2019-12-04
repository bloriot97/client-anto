import { SNACKBAR_OPEN, SNACKBAR_CLOSED } from '../actions/types'

const initialState = {
    isOpen: false,
    message: '',
}

export default function(state = initialState, action) {
    switch(action.type){
        case SNACKBAR_OPEN:
            return {
                ...state,
                message: action.payload.message,
                isOpen: true,
            };
        case SNACKBAR_CLOSED:
            return {
                ...state,
                isOpen: false,
                message: '',
            };
        default:
            return state;
    }
}
