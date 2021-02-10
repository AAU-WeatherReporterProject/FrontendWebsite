// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

module.exports = {
  'Test Home with Header and Logo': browser => {
    const page = browser.page.instructionPage();
    page
        .navigate()
        .waitForElementVisible('@appContainer')
        .assert.elementPresent('@homeDiv')
        .assert.containsText('@headline', 'Welcome to the Weather-App')
        .assert.elementCount('@logo', 1)
        .end()
  },

  'Test if p-tag with instruction is visible': browser => {
    const page = browser.page.instructionPage();
    page
        .navigate()
        .waitForElementVisible('@homeDiv')
        .assert.elementPresent('@instruction')
        .assert.containsText('@instruction', 'In this App you have the possibility')
        .end()
  },
}
