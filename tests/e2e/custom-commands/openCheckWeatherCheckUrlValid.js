module.exports = {
  command: async function () {
    this.url(this.launch_url + 'checkWeather')
    this.assert.equal(this.launch_url + 'checkWeather', 'http://localhost:8080/checkWeather')
  }
}
