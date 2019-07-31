import {API, graphqlOperation} from 'aws-amplify'
import {photos} from '../graphql/queries'

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



    return API.graphql(graphqlOperation(photos, {rover: rover, camera: camera, sol: sol}))
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
        })
};