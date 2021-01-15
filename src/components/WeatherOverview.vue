<template>
  <div id="output">
    <p class="info">Please click on the Location you want further information for.</p>
    <div v-for="w in weatherlist.data" v-bind:key="w.key" class="weather-output">
      <div class="location-box">
        <div class="location big"><a href="#">{{ w.location }}</a></div>
        <div class="location"> {{ w.name }} </div>
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
  mounted: async function () {
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