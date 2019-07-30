import {REQUEST_ROVERS, RECEIVE_ROVERS} from '../actions/rovers-action'

const rovers = (state = {
    rovers: [],
    isFetching: false,
    didInvalidate: false
}, action) => {
    switch (action.type) {
        case REQUEST_ROVERS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            };
        case RECEIVE_ROVERS:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                rovers: action.rovers,
                lastUpdated: action.receivedAt
            };
        default:
            return state
    }
};

export default rovers