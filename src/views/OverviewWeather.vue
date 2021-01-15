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

.info {
  display: block;
  width: 100%;
  padding: 15px;

  color: #313131;
  font-size: 20px;

  appearance: none;
  border: none;
  outline: none;
  background: none;

  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
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
  margin: 30px 0px;

  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

a {
  color: #FFF;
}

a :hover{
  color: #313131;
}
</style>