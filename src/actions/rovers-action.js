import {API, graphqlOperation} from 'aws-amplify'
import {rovers} from '../graphql/queries'

export const REQUEST_ROVERS = 'REQUEST_ROVERS';
export const RECEIVE_ROVERS = 'RECEIVE_ROVERS';

export const requestRovers = () => ({
    type: REQUEST_ROVERS
});

export const receiveRovers = json => ({
    type: RECEIVE_ROVERS,
    rovers: json,
    receivedAt: Date.now()
});

export const fetchRovers = () => {

    return (dispatch) => {
        dispatch(requestRovers());
        API.graphql(graphqlOperation(rovers))
            .then(response => {
                if (!response.data) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(response => response.data.rovers)
            .then(json => dispatch(receiveRovers(json)))
            .catch(function (error) {
                console.log(error);
                return dispatch(receiveRovers([]))
            })
    }
};