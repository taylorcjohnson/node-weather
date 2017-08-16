const request = require('request')

let getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/7d0df29f1975ee23ef7b4e9acd995e75/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if(!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            })
        } else {
            callback('Unable to fetch weather.')
        }
        
    })
}

module.exports = { getWeather }