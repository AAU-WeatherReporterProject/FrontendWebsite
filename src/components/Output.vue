<template>
  <div id="output">
    <div class="search-box">
      <input class="search-bar" type="text" placeholder="Search Location..." />
    </div>
    <div class="weather-output">
      <div class="location-box">
        <div class="location">Klagenfurt, Austria</div>
        <div class="date">Tuesday 22 Decembre 2020 </div>
      </div>
        <div class="weather-box">
          <div class="temp">4°C</div>
          <div class="sky-state">Rain</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "output",
  methods: {
    async getWeather() {
      try {
        // const response = await this.$store.dispatch('getWeather');
        // alert(response);
        // alert(JSON.stringify(response));
      } catch (e) {

      }
    }
  }
}
</script>

