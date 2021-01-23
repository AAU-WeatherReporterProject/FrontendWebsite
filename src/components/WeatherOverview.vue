<template>
  <div id="output">
    <div class="info">Please click on the Location you want further information for.</div>
<!--    TODO Nachricht falls noch kein Wetter hinzugefüpgt wurde-->
    <div v-for="w in weatherlist.data" v-bind:key="w.key" class="weather-output">
      <div class="location-box">
        <div class="location big"><router-link v-bind:to="'/checkWeather/' + w.location" >{{ w.location }}</router-link></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WeatherOverview",
  data() {
    return {weatherlist: undefined}
  },
  created: async function () {
    try {
      let response;
      response = await this.$store.dispatch('getMeasurements');
      this.weatherlist = response;
    } catch (e) {
      console.log(e);
    }
  }
}
</script>