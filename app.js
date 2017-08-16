const yargs = require('yargs')

const geocode = require('./geocode/geocode')

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

geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage) {
        console.log(errorMessage)
    } else {
        console.log(JSON.stringify(results, undefined, 2))
    }
})