<template>
  <div id="input">
    <form @submit="sendWeatherData({weather})" method="post"
          class="input-weather">
      <input label="Location" class="input-location" type="text" maxlength="20" name="Name of Location"
             placeholder="Name of Location" v-model.trim="weather.key">
      <input class="input-temp" type="text" maxlength="3" name="Temperature in Celsius"
             placeholder="Temperature in Celsius" v-model="weather.temperature">
      <select class="input-sky-state" name="Skystate" v-model="weather.skyState">
        <option disabled value="">Please select one</option>
        <option value="0">Sunny</option>
        <option value="1">Windy</option>
        <option value="2">Cloudy</option>
        <option value="3">Rain</option>
        <option value="4">Clear</option>
      </select>
      <button type="submit">Add Weather</button>
    </form>
  </div>
</template>
<script>

export default {
  name: "input",
  data() {
    return {
      weather: {
        //key is location
        key: "",
        temperature: "",
        skyState: ""
      }
    }
  },
  methods: {
    async sendWeatherData() {
      try {
        const response = await this.$store.dispatch('sendWeatherData', this.weather);
        console.log(response);
      } catch (e) {
        console.log(e);
      }
      this.$router.push({name: "OverviewWeather"});
    }
  }
}
</script>