import {API, graphqlOperation} from 'aws-amplify'
import {rovers} from '../graphql/queries'

export const REQUEST_PHOTOS = 'REQUEST_PHOTOS';
export const RECEIVE_PHOTOS = 'RECEIVE_PHOTOS';

export const requestPhotos = rover => ({
    type: REQUEST_PHOTOS,
    rover
});

export const receivePhotos = (json) => ({
    type: RECEIVE_PHOTOS,
    photos: json.photos,
    receivedAt: Date.now()
});

export const fetchPhotos = (rover, sol, camera) => dispatch => {
    dispatch(requestPhotos(rover));

    let url = `${ROOT_URL}/${rover}/photos?earth_date=${sol}`;
    if(camera !== 'ALL') {
        url = url + `&camera=${camera}`;
    }

    return API.graphql(graphqlOperation(rovers))
        .then(response => {
            if (!response.data) {
                throw Error(response.statusText);
            }
            return response;
        })
        .then(response => response.data)
        .then(json => dispatch(receivePhotos(json)))
        .catch(function(error) {
            return dispatch(receivePhotos({photos:[]}));
        });
};