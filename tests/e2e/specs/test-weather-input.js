module.exports = {
    'Test if inputWeather-Div is present': browser => {
        browser
            .openInputWeatherPage()
            .assert.elementPresent('.inputWeather')
            .end()
    },
    'Test Input-Weather if h1 is visible': browser => {
        browser
            .openInputWeatherPage()
            .assert.elementPresent('#app')
            .assert.containsText('h1', 'Input your Weather-Data')
            .end()
    },
    'Test if 5 Labels are present': browser => {
        browser
            .openInputWeatherPage()
            .assert.elementCount('label', 5)
            .end()
    },
    'Test if 4 input-fields are present': browser => {
        browser
            .openInputWeatherPage()
            .assert.elementCount('input', 4)
            .end()
    },
    'Test if 1 select-field is present': browser => {
        browser
            .openInputWeatherPage()
            .assert.elementCount('select', 1)
            .end()
    },
    'Test if 1 button is present': browser => {
        browser
            .openInputWeatherPage()
            .assert.elementCount('button', 1)
            .end()
    },
    'Test if XXXX': browser => {
        // Input Fields
        const inputLocation = '#loc';
        const inputTemperature = '#temp';
        const inputHumidity = '#hum';
        const inputAirPressure = '#press';
        const skySelect = '#sky';
        const skySelectValue = '#sky > option:nth-child(4)';
        const button = '#submitBtn';

        // Input Variables
        const location = 'MyTestInputLocation';
        const temp = 45;
        const hum = 64;
        const press = 1018;

        browser
            .openInputWeatherPage()
            .setValue(inputLocation, location)
            .setValue(inputTemperature, temp)
            .setValue(inputHumidity, hum)
            .setValue(inputAirPressure, press)
            .click(skySelect)
            .click(skySelectValue)
            .click(button)
            .saveScreenshot('tests_output/all_inputs.png') // Just for development to check if it`s working
            .openOverviewWeatherPage()
            .waitForElementVisible('#app')
            .assert.elementPresent('#output')
            .assert.elementPresent('a[href$="' + location + '"]')
            .saveScreenshot('tests_output/weather_overview.png')  // Just for development to check if it`s working
            .end()
    },
}