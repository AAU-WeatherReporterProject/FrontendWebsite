module.exports = {
    'Test Weather-Detailpage if Location is available': browser => {
        const location = 'TestLocation';
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

    'Test Weather-Detailpage info-tag is available': browser => {
        const location = 'Klagenfurt';

        browser
            .init()
            .openWeatherOutputPage(location)

        browser.page.weatherOutputPage()
            .waitForElementVisible('@app')
            .assert.elementPresent('@info')
            .end()
    },

    'Test Weather-Detailpage if weather-data is available': browser => {
        browser
            .init()
            .openWeatherOutputPage('TestLocation')

        browser.page.weatherOutputPage()
            // test with guard assertion if there`is some Weather-Data
            .checkIfWeatherDataExists()
            .assert.elementPresent('@weatherBox')
            .end()
    },

    'Test if toggleSwitch is available (Weather-Details)': browser => {
        const location = 'TestLocation';

        browser
            .init()
            .openWeatherOutputPage(location)

        browser.page.weatherOutputPage()
            .checkIfWeatherDataExists()
            .assert.elementPresent('@toggleSwitch')
            .end()
    },

    'Test Weather-Detailpage if SkyState & Temperature are available': browser => {
        const location = 'TestLocation';

        browser
            .init()
            .openWeatherOutputPage(location)

        browser.page.weatherOutputPage()
            .checkIfWeatherDataExists()
            .assert.elementPresent('@skyState')
            .assert.elementPresent('@temperature')
            .end()
    },

    'Test Weather-Detailpage if humidity & airpressure are available': browser => {
        const location = 'TestLocation';
        browser
            .init()
            .openWeatherOutputPage(location)

        browser.page.weatherOutputPage()
            .checkIfWeatherDataExists()
            .assert.elementPresent('@humidity')
            .assert.elementPresent('@airPress')
            .end()
    },

    'Test Weather-Detailpage if date is available': browser => {
        const location = 'TestLocation';

        browser
            .init()
            .openWeatherOutputPage(location)

        browser.page.weatherOutputPage()
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
            .checkIfWeatherDataExists()
            .changeView('@switchToList')
            .assert.elementPresent('@weatherBox')
            .end()
    }
}
