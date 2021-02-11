module.exports = {
    url: '/overviewWeather',

    // A page object can have elements
    elements: {
        output: '#output',
        headline: 'h1',
        info: '.info',
        weatheroutput: '.weather-output',
        locationbox: '.location-box',
        showBoxesLocation: '.location-big',
    },
    commands: [{
       linkToDetailPage(location) {
            return this
                .click('a[href$="' + location + '"]')
        }
    }],
}
