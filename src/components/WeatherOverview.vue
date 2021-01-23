<template>
  <div id="output">
    <div class="info">Please click on the Location you want further information for.</div>
    <div v-for="w in weatherlist" v-bind:key="w.key" class="weather-output">
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
    return {
      weatherlist: [],
      isLoading: false,
      error: null
    }
  },
  created: async function () {
    try {
      this.$forceUpdate();
      this.isLoading = true;
      this.error = null;
      let response;
      response = await this.$store.dispatch('getMeasurements');
      this.weatherlist = response.data;
      this.isLoading = false;
      if(this.weatherlist.length === 0){
        this.error = true;
      }else{
        this.error = null;
      }
    } catch (e) {
      this.$bvToast.toast('Receiving of measurements failed', {
        title: 'Error!',
        variant: 'danger',
        toaster: 'b-toaster-top-center',
        autoHideDelay: 5000
      });
      this.isLoading = false;
      this.error = true;
    }
  }
}
</script>