module.exports = {
    url: '/inputWeather',
    elements: {
        // Form-Fields
        inputLocation: '#loc',
        inputTemperature: '#temp',
        inputHumidity: '#hum',
        inputAirPressure: '#press',
        skySelect: '#sky',
        submitBtn: '#submitBtn',
    },
    commands: [{
        setLocation(value) {
            return this
                .setValue('@inputLocation', value);
        },
        setTemperature(value) {
            return this
                .setValue('@inputTemperature', value);
        },
        setHumidity(value) {
            return this
                .setValue('@inputHumidity', value);
        },
        setAirPressure(value) {
            return this
                .setValue('@inputAirPressure', value);
        },
        selectSkyState(selector, value) {
            return this
                .click(selector)
                .click('#sky > option[value="' + value + '"]');
        },
        submitWeatherData() {
            return this
                .click('@submitBtn');
        }
    }]
};