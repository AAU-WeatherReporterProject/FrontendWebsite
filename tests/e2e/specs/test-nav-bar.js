module.exports = {
    'Test if Nav-Bar contains 3 Elements': browser => {
        browser
            .openHomepage()
            .assert.elementPresent('#app')
            .assert.elementPresent('#nav')
            .end()
    }
}