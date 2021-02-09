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
        const page = browser.page.inputWeatherPage();
        const location = 'MyTestInputLocation';
        // Page-object for better reusability and DRY
        page
            .navigate()
            .setLocation(location)
            .setTemperature(34)
            .setHumidity(64)
            .setAirPressure(1018)
            .selectSkyState('@skySelect', 4)
            .submitWeatherData()
            //.saveScreenshot('tests_output/all_inputs.png') // Just for development to check if it`s working
            .openOverviewWeatherPage()
            .waitForElementVisible('#app')
            .assert.elementPresent('#output')
            .assert.elementPresent('a[href$="' + location + '"]')
           // .saveScreenshot('tests_output/weather_overview.png')  // Just for development to check if it`s working
            .end()
    },

}