<template>
  <div id="input">
    <form @submit.prevent="sendWeatherData()" method="post"
          class="input-weather">
      <div class="left">
        <label for="loc">Location:</label>
      </div>
      <input id="loc" class="input-location" type="text" maxlength="20" name="Name of Location"
             placeholder="Name of Location" v-model.trim="weather.key" required>
      <div class="left">
        <label for="temp">Temperature:</label>
      </div>
      <input id="temp" class="input-temp" type="number" :min="-40" :max="60" name="Temperature in Celsius"
             placeholder="Temperature in Celsius" v-model="weather.temperature" required>
      <div class="left">
        <label for="sky">Sky-State:</label>
      </div>
      <select id="sky" class="input-sky-state" name="Skystate" v-model="weather.skyState" required>
        <option disabled value="">Please select one</option>
        <option v-for="(skystate,index) in this.$store.state.skyWeather" :value="index">{{skystate}}</option>
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
  //TODO TOAST
  methods: {
    async sendWeatherData() {
      try {
        const response = await this.$store.dispatch('saveWeather', this.weather);
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    }
  }
}
</script>