// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  'Test Link to Overview Weather and see if output div is present': browser => {
    browser
        .init()
        .waitForElementVisible('#app')
        .click('#check-ov-link')
        .assert.elementPresent('#output')
      .end()
  },

  // 'Test if Search-box is present': browser => {
  //   browser
  //       .url(browser.launch_url + "checkWeather")
  //       .waitForElementVisible('#output')
  //       .assert.elementPresent('.search-box')
  //       .end()
  // },

  // 'Test if Search-bar is present': browser => {
  //   browser
  //       .openCheckWeatherPage()
  //       .assert.elementPresent('.search-bar')
  //       .end()
  // },

  'Test if Weather-Output is present': browser => {
    browser
        .openOverviewWeatherPage()
        .assert.elementPresent('.weather-output')
        .end()
  },

  'Test if location-box is present': browser => {
    browser
        .openOverviewWeatherPage()
        .assert.elementPresent('.location-box')
        .end()
  },

  'Test WEATHER-Overview with openOverviewWeather-Url': browser => {
    browser
        .openOverviewWeatherCheckUrlValid()
        .assert.elementPresent('#output')
        .end()
  },

  // 'Test WEATHER-Overview contains all Divs': browser => {
  //   browser
  //       .checkWeatherOutputContainsAllDivs()
  //       .assert.elementPresent('.sky-state')
  //       .end()
  // }
}
