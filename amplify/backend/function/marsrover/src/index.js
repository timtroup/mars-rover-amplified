const axios = require('axios');
const ROOT_URL =`https://api.nasa.gov/mars-photos/api/v1/rovers`;
const constants = require('./constants');

exports.handler = function (event, _, callback) { //eslint-disable-line

  let url = `${ROOT_URL}?api_key=${constants.API_KEY}`;

  axios.get(url)
      .then((res) => {
          let rovers = res.data.rovers;
          console.log(JSON.stringify(rovers));
        callback(null, rovers)
      })
      .catch((err) => {
        callback(null, err);
      });
};
