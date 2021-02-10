module.exports = {
    'Test if Nav-Bar contains 3 Elements': browser => {
        browser
            .countNavigationElements()
            .assert.elementPresent('#nav')
            .end()
    },
    'Test if Nav-Bar contains Home': browser => {
        const page = browser.page.instructionPage();
        page
            .navigate()
            .assert.containsText('@navBar', 'Home')
            .end()
    }
}