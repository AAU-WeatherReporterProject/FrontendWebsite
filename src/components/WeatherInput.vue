<template>
  <div id="input">
    <form @submit.prevent="sendWeatherData()" method="post"
          class="input-weather">
      <!--Input Location-->
      <div class="left">
        <label for="loc">Location:</label>
      </div>
      <input id="loc" class="input-location" type="text" maxlength="20" name="Name of Location"
             placeholder="Name of Location" v-model.trim="weather.key" required>
      <!--Input Temperature-->
      <div class="left">
        <label for="temp">Temperature:</label>
      </div>
      <input id="temp" class="input-temp" type="number" :min="-40" :max="60" name="Temperature in Celsius"
             placeholder="Temperature in Celsius" v-model="weather.temperature" required>
      <!--Input Humidity-->
      <div class="left">
        <label for="hum">Humidity:</label>
      </div>
      <input id="hum" class="input-hum" type="number" :min="0" :max="100" name="Humidity in Percent"
             placeholder="Humidity in Percent" v-model="weather.humidity">
      <!--Input Air Pressure-->
      <div class="left">
        <label for="press">Air Pressure:</label>
      </div>
      <input id="press" class="input-press" type="number" :min="150" :max="1030" name="Air Pressure in Pa"
             placeholder="Air Pressure in Pa" v-model="weather.pressure">
      <!--Input Sky-State-->
      <div class="left">
        <label for="sky">Sky-State:</label>
      </div>
      <select id="sky" class="input-sky-state" name="Skystate" v-model="weather.skyState" required>
        <option disabled value="">Please select one</option>
        <option v-for="(skystate,index) in $store.state.skyWeather" :value="index">{{skystate}}</option>
      </select>
      <button id="submitBtn" type="submit">Add Weather</button>
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
        skyState: "",
        humidity: "",
        pressure: ""
      }
    }
  },

  methods: {
    async sendWeatherData() {
      try {
        await this.$store.dispatch('saveWeather', this.weather);
        this.$bvToast.toast("Stored Weather for: " + this.weather.key  , {
          title: 'Succes!',
          variant: 'success',
          toaster: 'b-toaster-top-center',
          autoHideDelay: 5000
        });
      } catch (e) {
        this.$bvToast.toast("Could not store Weather for: " + this.weather.key  , {
          title: 'Failure!',
          variant: 'danger',
          toaster: 'b-toaster-top-center',
          autoHideDelay: 5000
        });
      }
    }
  }
}
</script>