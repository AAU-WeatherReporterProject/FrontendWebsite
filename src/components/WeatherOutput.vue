<template>
  <div id="output">
    <div class="location"> in: {{key}}</div>
    <div v-if="weather.length">
      <p class="info">No Weather Data created yet. Please use <router-link :to="'/inputWeather'">"Input Weather"</router-link> to do so.</p>
    </div>
    <div v-else v-for="w in this.weather" class="weather-output">
      <div class="weather-box">
        <div class="sky-state">
          <div>{{skyWeather[w.skyState]}}</div>
        </div>
        <div class="temp"> {{w.temperature}} °C</div>
        <div class="date" >on: {{new Date(w.timestamp)}} </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "output",
  data(){
    return {
      key: this.$route.params.key,
      weather:[],
      skyWeather: this.$store.state.skyWeather
    }
  },
  async created() {
    console.log("in Created");
    try {
      const response = await this.$store.dispatch('getWeatherData', this.key);
      this.weather = response.data;
    } catch (e) {

    }
  }
}
</script>

