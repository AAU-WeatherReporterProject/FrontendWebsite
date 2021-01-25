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

  'Test if overviewWeather-Div is present': browser => {
    browser
        .openOverviewWeatherPage()
        .assert.elementPresent('.overviewWeather')
        .end()
  },
  // TODO Test nur wenn Element vorhanden?
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

  'Test Overview if h1 is visible': browser => {
    browser
        .openOverviewWeatherPage()
        .assert.elementPresent('.info')
        .assert.containsText('h1', 'Weather Overview')
        .end()
  },



  // 'Test WEATHER-Overview contains all Divs': browser => {
  //   browser
  //       .checkWeatherOutputContainsAllDivs()
  //       .assert.elementPresent('.sky-state')
  //       .end()
  // },


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

}
