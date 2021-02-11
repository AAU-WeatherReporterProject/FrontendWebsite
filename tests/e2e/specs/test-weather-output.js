module.exports = {
    'Test Weather-Detailpage if Location is available': browser => {
        const location = 'Klagenfurt';

        browser
            .init()
            .openWeatherOutputPage(location)

        browser.page.weatherOutputPage()
            .saveScreenshot('tests_output/navigation_is_working.png')
            .waitForElementVisible('@app')
            .assert.elementPresent('@locationDiv')
            .assert.containsText('@locationDiv', location)
            .end()
    },

    // test with guard assertion if there`s no Data yet
    'Test Weather-Detailpage info-tag is available': browser => {
        const location = 'Klagenfurt';

        browser
            .init()
            .openWeatherOutputPage(location)

        browser.page.weatherOutputPage()
            //.saveScreenshot('tests_output/navigation_is_working.png')
            .waitForElementVisible('@app')
            .assert.elementPresent('@info')
            .end()
    },

    'Test Weather-Detailpage if weather-data is available': browser => {
        const location = 'TestLocation';

        browser
            .init()
            .openWeatherOutputPage(location)

        browser.page.weatherOutputPage()
            // test with guard assertion if there`is some Weather-Data
            .checkIfWeatherDataExists()
            .assert.elementPresent('@weatherBox')
            .end()
    },

    'Test Weather-Detailpage if toggleSwitch is available': browser => {
        const location = 'TestLocation';

        browser
            .init()
            .openWeatherOutputPage(location)

        browser.page.weatherOutputPage()
            // test with guard assertion if there`is some Weather-Data
            .checkIfWeatherDataExists()
            .assert.elementPresent('@toggleSwitch')
            .end()
    },

    'Test Weather-Detailpage if SkyState is available': browser => {
        const location = 'TestLocation';

        browser
            .init()
            .openWeatherOutputPage(location)

        browser.page.weatherOutputPage()
            // test with guard assertion if there`is some Weather-Data
            .checkIfWeatherDataExists()
            .assert.elementPresent('@skyState')
            .end()
    },

    'Test Weather-Detailpage if temperature is available': browser => {
        const location = 'TestLocation';

        browser
            .init()
            .openWeatherOutputPage(location)

        browser.page.weatherOutputPage()
            // test with guard assertion if there`is some Weather-Data
            .checkIfWeatherDataExists()
            .assert.elementPresent('@temperature')
            .end()
    },

    'Test Weather-Detailpage if humidity is available': browser => {
        const location = 'TestLocation';

        browser
            .init()
            .openWeatherOutputPage(location)

        browser.page.weatherOutputPage()
            // test with guard assertion if there`is some Weather-Data
            .checkIfWeatherDataExists()
            .assert.elementPresent('@humidity')
            .end()
    },

    'Test Weather-Detailpage if airPress is available': browser => {
        const location = 'TestLocation';

        browser
            .init()
            .openWeatherOutputPage(location)

        browser.page.weatherOutputPage()
            // test with guard assertion if there`is some Weather-Data
            .checkIfWeatherDataExists()
            .assert.elementPresent('@airPress')
            .end()
    },

    'Test Weather-Detailpage if date is available': browser => {
        const location = 'TestLocation';

        browser
            .init()
            .openWeatherOutputPage(location)

        browser.page.weatherOutputPage()
            // test with guard assertion if there`is some Weather-Data
            .checkIfWeatherDataExists()
            .assert.elementPresent('@date')
            .end()
    },

    'Test Weather-Detailpage if Switch to List is working and weather-Data is available': browser => {
        const location = 'TestLocation';

        browser
            .init()
            .openWeatherOutputPage(location)

        browser.page.weatherOutputPage()
            // test with guard assertion if there`is some Weather-Data
            .checkIfWeatherDataExists()
            .changeView('@switchToList')
            .assert.elementPresent('@weatherBox')
            .end()
    }
}
