// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  'Test Link to Check Weather/Output and see if output div is present': browser => {
    browser
      .init()
      .waitForElementVisible('#app')
        .click('#check-w-link')
      .assert.elementPresent('#output')
      .end()
  },

  'Test if Search-box is present': browser => {
    browser
        .init()
        .waitForElementVisible('#app')
        .click('#check-w-link')
        .waitForElementVisible('#output')
        .assert.elementPresent('.search-box')
        .end()
  },

  'Test if Search-bar is present': browser => {
    browser
        .init()
        .waitForElementVisible('#app')
        .click('#check-w-link')
        .assert.elementPresent('.search-bar')
        .end()
  },

  'Test if Weather-Output is present': browser => {
    browser
        .init()
        .waitForElementVisible('#app')
        .click('#check-w-link')
        .assert.elementPresent('.weather-output')
        .end()
  },

  'Test if location-box is present': browser => {
    browser
        .init()
        .waitForElementVisible('#app')
        .click('#check-w-link')
        .assert.elementPresent('.location-box')
        .end()
  },
}
