<template>
  <div class="small">
    <p class="chart-info">
      In order to get more detailed information on the individual information such as temperature etc.,
      the data that are not required can be hidden by clicking on their label.
      If you move the mouse over the individual points, you can see their details in a tooltip.
    </p>
    <line-chart :chart-data="datacollection"></line-chart>
  </div>
</template>

<script>
import LineChart from "@/LineChart";

export default {
  components: {
    LineChart
  },
  props:{
    weatherData: Array
  },
  data () {
    return {
      datacollection: null,
      timestamps: [],
      temperatures: [],
      humidities: [],
      pressures: [],
      skyStates: [],
    }
  },
  mounted () {
    this.collectWeatherData(this);
    this.fillData(this);
  },
  methods: {
    collectWeatherData(vueScope){
      this.weatherData.forEach(fillArrays);

     function fillArrays(item){
       var date = new Date(item.timestamp);
       var dd = String(date.getDate()).padStart(2, '0');
       var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
       var yyyy = date.getFullYear();
       date = dd + '.' + mm + '.' + yyyy;
       vueScope.timestamps.push(vueScope.$store.state.skyWeather[item.skyState] +' - '+ date);
       vueScope.temperatures.push(item.temperature);
       vueScope.humidities.push(item.humidity);
       vueScope.pressures.push(item.pressure);
       vueScope.skyStates.push(item.skyState);
     }
    },
    fillData (vueScope) {
      this.datacollection = {
        labels: vueScope.timestamps,
        datasets: [
          {
            label: 'Temperature in °C',
            backgroundColor: 'rgba(114, 0, 76, 0.4)',
            borderColor: 'rgba(114, 0, 76, 1)',
            data: vueScope.temperatures
          }, {
            label: 'Humidity in %',
            backgroundColor: 'rgba(9, 183, 183, 0.4)',
            borderColor: 'rgba(9, 183, 183, 1)',
            data: vueScope.humidities
          },
          {
            label: 'Air Pressure in hPa',
            backgroundColor: 'rgba(213, 216, 0, 0.4)',
            borderColor: 'rgba(213, 216, 0, 1)',
            data: vueScope.pressures
          }
        ]
      }
    }
  }
}
</script>

<style>
.small {
  max-width: 600px;
  margin:  150px auto;
}
</style>
