module.exports = {
    url: '/checkWeather/',

    // A page object can have elements
    elements: {
        app: '#app',
        locationDiv: 'div.location',
        info: '.info',
        toggleSwitch: '.toggle-switch',
        switchToList: '#List',
        switchToChart: '#Chart',
        weatherBox: '.weather-box',
        skyState: '.sky-state',
        temperature: '.temp',
        humidity: '.hum',
        airPress: '.press',
        date: '.date',
        chart: '.chart',
        chartInfo: '.chart-info',
    },
    commands: [{
        changeView(view){
            return this.click(view)
        }
    }],
}
