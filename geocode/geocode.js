const request = require('request')

const geocodeAddress = (address, callback) => {
    let encodedAddress = encodeURIComponent(address)

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback(`Unable to connect to Google servers.`, undefined)
        } else if (body.status !== 'OK') {
            callback(`Unable to locate address.`)
        } else {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            })
        }
    })
}

module.exports = { geocodeAddress }