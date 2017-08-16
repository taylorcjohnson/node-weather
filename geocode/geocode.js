const request = require('request')

const geocodeAddress = (address) => {
    let encodedAddress = encodeURIComponent(address)

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
        console.log(`Unable to connect to Google servers.`);
        } else if (body.status !== 'OK') {
        console.log(`Unable to locate address.`);
        } else {
        console.log(`Address: ${body.results[0].formatted_address}`);
        console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
        console.log(`Longtitude: ${body.results[0].geometry.location.lng}`);
        }
    })
}

module.exports = { geocodeAddress }