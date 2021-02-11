module.exports = {
    command: async function (location) {
        this.url(this.launch_url + 'checkWeather/' + location)
    }
}