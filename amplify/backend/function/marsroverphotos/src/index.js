const axios = require('axios');
const ROOT_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers`;
const constants = require('./constants');

exports.handler = function (event, _, callback) { //eslint-disable-line

    if (event.arguments) {
        let rover = event.arguments.rover;
        let sol = event.arguments.sol;
        let camera = event.arguments.camera;

        let url = `${ROOT_URL}/${rover}/photos?earth_date=${sol}`;
        if (camera !== 'ALL') {
            url = url + `&camera=${camera}`;
        }
        url = url + `&api_key=${constants.API_KEY}`;

        axios.get(url)
            .then((res) => {
                let photos = res.data.photos;
                console.log(JSON.stringify(photos));
                callback(null, photos)
            })
            .catch((err) => {
                callback(null, err);
            });
    }

};
