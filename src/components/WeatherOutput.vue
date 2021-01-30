<template>
  <div id="output">
    <div class="location"> in: {{key}}</div>
    <div v-if="error">
      <p class="info">No Weather Data created yet. Please use <router-link :to="'/inputWeather'">"Input Weather"</router-link> to do so.</p>
    </div>
    <div v-else-if="isLoading">
      <p class="info">Loading...</p>
    </div>
    <div v-else v-for="w in this.weather" class="weather-output">
      <div class="weather-box">
        <div class="sky-state">
          <div>{{skyWeather[w.skyState]}}</div>
        </div>
        <div class="temp">
          {{w.temperature}} °C
          <div class="hum"> {{w.humidity}} %</div>
          <div class="press"> {{w.pressure}} Pa</div>
        </div>
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
      skyWeather: this.$store.state.skyWeather,
      isLoading: false,
      error: null
    }
  },
  async created() {
    try {
      this.isLoading = true;
      this.error = null;
      const response = await this.$store.dispatch('getWeatherData', this.key);
      this.weather = response.data;
      this.isLoading = false;
      if(this.weather.length === 0){
        this.error = true;
      }else{
        this.error = null;
      }
    } catch (e) {
      this.isLoading = false;
      this.error = true;
    }
  }
}
</script>

