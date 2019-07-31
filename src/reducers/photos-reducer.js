import {REQUEST_PHOTOS, RECEIVE_PHOTOS} from '../actions/photos-action'

const photos = (state = {
    photos: [],
    isFetching: false
}, action) => {
    switch (action.type) {
        case REQUEST_PHOTOS:
            return {
                ...state,
                isFetching: true
            };
        case RECEIVE_PHOTOS:
            return {
                ...state,
                isFetching: false,
                photos: action.photos,
                lastUpdated: action.receivedAt
            };
        default:
            return state
    }
};

export default photos