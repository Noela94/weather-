const request = require('request');

const geocode = function (address, callback) {
    var url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoiamVsbHlraWNrOTQiLCJhIjoiY2tweG00ZW85MDR6ZzJ1cGNqdTgzaG5pYiJ9.tgSco_7h_DBLKcJd9wVFEg&limit'

    request ({url: url, json:true} , function(error,response) {
        if(error) {
            callback('there is an error', undefined);

        } else {
            callback (undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            });
        }
    })
}

module.exports = geocode
