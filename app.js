const request = require('request')
const yargs = require('yargs')

const argv = yargs
    .options({  //set options for command arguments
        a: {    //'a' argument flag for address, configuration below
            demand: true,
            alias: 'address',
            describe: 'Address for which to fetch weather',
            string: true
        }
    })
    .help() //add help to command
    .alias('help', 'h') //add h flag as help alias
    .argv //adds configuration to yargs

let encodedAddress = encodeURIComponent(argv.address)

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