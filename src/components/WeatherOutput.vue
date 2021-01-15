<template>
  <div id="output">
<!--    <div class="search-box">-->
<!--      <input class="search-bar" type="text" placeholder="Search Location..." />-->
<!--    </div>-->
<!--    <button @click="getWeather('123456789', '2020-08-08 23:59:00', '2020-09-10 23:59:00')">Test Api Click</button>-->
    <div v-for="w in weather.data" v-bind:key="w.key" class="weather-output">
      <div class="location-box">
        <div class="location"> {{ w.location }} </div>
        <div class="location"> {{ w.name }} </div>
      </div>
<!--      <div class="date">From: {{w.from}} </div>-->
<!--      <div class="date">To: {{ w.to }} </div>-->
<!--      <div class="weather-box">-->
<!--        <div class="temp">4°C</div>-->
<!--        <div class="sky-state">Rain</div>-->
<!--      </div>-->
    </div>
  </div>
</template>
<!--from=2020-08-08 23:59:00&to=2020-09-10 23:59:00&key=123456789-->
<script>
export default {
  name: "output",
  data(){
    return {weather:undefined}
  },
  mounted: async function(){
    try{
          const response = await this.$store.dispatch('getMeasurements');
          this.weather = response;
          // alert(JSON.stringify(response));
      console.warn(response);
        }
        catch(e){

      }
  }
  // methods: {
  //   async getMeasurements(key, from, to) {
  //     try{
  //       const response = await this.$store.dispatch('getMeasurements');
  //       alert(JSON.stringify(response));
  //     }
  //     catch(e){
  //
  //     }
  //   }
  // }
}
</script>

