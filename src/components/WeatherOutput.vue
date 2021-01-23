<template>
  <div id="output">
    <div class="location"> in: {{key}}</div>

    <!--    TODO Nachricht falls noch kein Wetter hinzugefüpgt wurde-->

    <div v-for="w in this.weather" class="weather-output">
      <div class="weather-box">
        <div class="sky-state">
<!--          Todo maybe with Access on Array as a Property-->
          <div v-if="w.skyState == 0">Sunny</div>
          <div v-else-if="w.skyState == 1">Windy</div>
          <div v-else-if="w.skyState == 2">Cloudy</div>
          <div v-else-if="w.skyState == 3">Rain</div>
          <div v-else-if="w.skyState == 4">Clear</div>
          <div v-else>No Sky-State-Information was given :(</div>
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
      weather:undefined,
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

