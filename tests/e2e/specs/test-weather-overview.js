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

  'Test if location-box is present': browser => {
    browser.page.overviewWeatherPage()
        .navigate()
        .waitForElementVisible('@info')
       .assert.elementPresent('@locationbox')
        .end()
  },

  'Test WEATHER-Overview with openOverviewWeather-Url': browser => {
    browser
        .openOverviewWeatherCheckUrlValid()
        .assert.elementPresent('#output')
        .end()
  },

  'Test Overview if h1 is visible and contains right text': browser => {
    browser.page.overviewWeatherPage()
        .navigate()
        .waitForElementVisible('@headline')
        .assert.containsText('@headline', 'Weather Overview')
        .end()
  },

  'Test if Link to Detailpage is working': browser => {
    const location = 'Klagenfurt';

    browser.page.overviewWeatherPage()
        .navigate()
        .waitForElementVisible('@weatheroutput')
        .saveScreenshot('tests_output/Klagenfurt_Link_is_visible.png')
        .linkToDetailPage(location)
        .assert.containsText('div.location', location)
        .end()
  }
}
