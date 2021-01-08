module.exports = {
  command: async function () {
    this.url(this.launch_url + 'checkWeather')
    const result = await this.elements('css selector', '.weather-output div')
    this.assert.strictEqual(result.value.length, 6)
  }
}
