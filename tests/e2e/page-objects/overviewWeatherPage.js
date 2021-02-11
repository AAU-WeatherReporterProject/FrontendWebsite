module.exports = {
    url: '/overviewWeather',

    // A page object can have elements
    elements: {
        output: '#output',
        headline: 'h1',
        info: '.info',
        weatheroutput: 'div.weather-output',
        locationbox: 'div.location-box',
        showBoxesLocation: 'div.location-big',
    },
    commands: [{
       linkToDetailPage(location) {
            return this
                .click('a[href$="' + location + '"]')
        }
    }],
}
