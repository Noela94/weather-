const request = require('request');

const forecast = function (latitude, longitude, callback) {
    var url = 'http://api.weatherstack.com/current?access_key=4b09c3d936f66c28a5f23925354ef3af&query='+latitude+','+longitude;

    request ({url: url, json:true} , function(error,response) {
        if(error) {
            callback('there is an error', undefined);

        } else {
            callback (undefined, {
                location: response.body.location,
                status: response.body.current.temperature
            });
        }
    })
}

module.exports = forecast