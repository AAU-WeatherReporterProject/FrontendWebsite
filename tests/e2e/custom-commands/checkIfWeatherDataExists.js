module.exports = {
    command: async function () {
        const result = await this.elements('css selector', '.weather-box')
        this.assert.notEqual(result.value.length, 0, 'Check if Weather-Data is present: yes != 0')
    }
}