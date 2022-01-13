const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a63906d207e1972e22db058938d655a4&query=' + lat + ',' + long + '&units=f'
    
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Network connection failed')
        } else if (body.error) {
            callback('Bad coordinates', undefined)
        } else {
            callback(undefined, {
                location: body.location.name,
                forecast: body.current.weather_descriptions[0],
                
            })
        }
    })
}

module.exports = forecast