module.exports = {
  command: async function () {
    this.url(this.launch_url + 'overviewWeather')
    this.assert.equal(this.launch_url + 'overviewWeather', 'http://localhost:8081/overviewWeather')
  }
}
