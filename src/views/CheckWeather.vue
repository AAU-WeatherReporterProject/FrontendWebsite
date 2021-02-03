<template>
  <div class="checkWeather">
    <h1>Check Weather</h1>
    <Output></Output>
  </div>
</template>

<script>
// @ is an alias to /src
import Output from "@/components/WeatherOutput.vue";

export default {
  name: 'checkWeather',
  components: {
   Output
  },
  methods: {

    }
}

</script>

<style>

#output{
  padding: 5px;
}

.location{
  color: #FFF;
  font-size: 50px;
  font-weight: 900;
  font-style: italic;
  text-align: center;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  margin-bottom: 5px;
}

.weather-box{
  margin: 15px 0px;
}

.weather-box .date{
  color: #FFF;
  font-size: 20px;
  font-weight: 300;
  font-style: italic;
  text-align: center;
}

.weather-box .temp{
  display: inline-block;
  padding: 15px 25px;

  color: #FFF;
  font-size: 90px;
  font-weight: 900;

  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 16px;
  margin: 10px 0px;

  box-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.weather-box .temp .hum{
  color: #FFF;
  font-size: 50px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);

  margin: 10px 0px;
}

.weather-box .temp .press{
  color: #FFF;
  font-size: 30px;
  font-weight: 900;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);

  margin: 10px 0px;
}

.weather-box .sky-state{
  color: #FFF;
  font-size: 40px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

.small{
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 0px 16px 0px 16px;
  transition: 0.4s;
  padding: 10px;
  margin-top: 2px;
}

.chart-info{
  display: block;
  width: 100%;
  padding: 15px;
  margin: 2px;

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
</style>