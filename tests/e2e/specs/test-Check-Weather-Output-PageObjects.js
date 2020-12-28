module.exports = {
  beforeEach: (browser) => browser.init(),

  // 'check weather output with page objects- searchbox - searchbar': (browser) => {
  //   const actualPage = browser.page.checkWeatherOutputPage()
  //   actualPage.waitForElementVisible('@appContainer')
  //
  //   const searchbox = actualPage.section.app
  //   searchbox.expect.element('@searchbar').to.be.visible
  //   browser.end()
  // },
  //
  // 'check weatheroutput with page objects- location- & weatherbox are visible': (browser) => {
  //   const actualPage = browser.page.checkWeatherOutputPage()
  //   actualPage.waitForElementVisible('@app')
  //
  //   const weatheroutput = actualPage.section.weatheroutput
  //   weatheroutput.expect.element('@locationbox').to.be.visible
  //   weatheroutput.expect.element('@weatherbox').to.be.visible
  //   browser.end()
  // },


  // 'verify ': (browser) => {
  //   const actualPage = browser.page.checkWeatherOutputPage()
  //   const welcomeSection = actualPage.section.app.section.instruction
  //
  //   welcomeSection.expect.element('@cliPluginLinks').text.to.contain('e2e-nightwatch')
  // }
}