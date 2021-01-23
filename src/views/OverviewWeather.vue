<template>
  <div class="overviewWeather">
    <h1>Weather Overview</h1>
    <Overview></Overview>
  </div>
</template>

<script>
// @ is an alias to /src
import Overview from "@/components/WeatherOverview.vue";

export default {
  name: 'weatherOverview',
  components: {
    Overview
  },
  methods: {

  }
}

</script>

<style>

#output{
  padding: 5px;
}

.location-box{
  display: inline-block;
  padding: 15px 25px;

  color: #FFF;
  font-size: 30px;
  font-weight: 900;

  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 2px 0px;

  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

a {
  color: #FFF;
}

a :hover{
  color: #313131;
}
</style>