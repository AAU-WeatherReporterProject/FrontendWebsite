// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  'Test Home with Header and Logo': browser => {
    browser
      .init()
      .waitForElementVisible('#app')
      .assert.elementPresent('.instruction')
      .assert.containsText('h1', 'Welcome to the Weather-App')
      .assert.elementCount('img', 1)
      .end()
  },

  'Test if p-tag with instruction is visible': browser => {
    browser
        .init()
        .waitForElementVisible('#app')
        .assert.elementPresent('#instruction-text')
        .assert.containsText('p', 'In this App you have the possibility')
        .end()
  },
}
