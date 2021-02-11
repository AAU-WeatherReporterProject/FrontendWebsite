module.exports = {
    'Test if Nav-Bar contains 3 Elements': browser => {
        browser
            .countNavigationElements()
            .assert.elementPresent('#nav')
            .end()
    },

    'Test if Nav-Bar contains Home': browser => {
        browser.page.instructionPage()
            .navigate()
            .assert.containsText('@navBar', 'Home')
            .end()
    },

    'Test if Nav-Bar contains Weather Overview': browser => {
        browser.page.instructionPage()
            .navigate()
            .assert.containsText('@navBar', 'Weather Overview')
            .end()
    },

    'Test if Nav-Bar contains Input Weather': browser => {
       browser.page.instructionPage()
            .navigate()
            .assert.containsText('@navBar', 'Input Weather')
            .end()
    },

    'Test if Nav-Bar-Link to Weather Overview works': browser => {
        browser.page.instructionPage()
            .navigate()
            .click('@overviewLink');
        browser.page.overviewWeatherPage()
            .navigate()
            .assert.containsText('@headline', 'Weather Overview')
            .end()
    }
}