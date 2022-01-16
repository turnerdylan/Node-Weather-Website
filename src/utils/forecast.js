const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a63906d207e1972e22db058938d655a4&query=' + lat + ',' + long + '&units=f'
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Network connection failed')
        } else if (body.error) {
            callback('Bad coordinates', undefined)
        } else {
            callback(undefined, 
                'In ' + body.location.name + ', it is currently ' + body.current.temperature + 
                ' degrees and ' + body.current.weather_descriptions[0] + '. There will be ' + 
                body.current.precip + ' mm of precipitation. It feels like ' + body.current.feelslike + ' degrees.'
                
            )
        }
    })
}

module.exports = forecast