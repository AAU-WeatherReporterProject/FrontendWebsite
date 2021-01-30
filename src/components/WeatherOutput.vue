<template>
  <div id="output">
    <div class="location"> in: {{key}}</div>
    <div v-if="error">
      <p class="info">No Weather Data created yet. Please use <router-link :to="'/inputWeather'">"Input Weather"</router-link> to do so.</p>
    </div>
    <div v-else-if="isLoading">
      <p class="info">Loading...</p>
    </div>
    <div v-else class="weather-output">
      <div>
        <p class="info">Here you can choose how the data should be displayed: {{this.selectedDisplayOption}}</p>
        <toggle-switch
            :options="displayOptions"
            @input="selectDisplayOption($event)"
            v-model="this.selectedDisplayOption"
        />
      </div>
      <!-- Display List-->
      <div v-if="this.selectedDisplayOption == 'List'">
        <div v-for="w in this.weather" >
          <div class="weather-box">
            <div class="sky-state">
              <div>{{skyWeather[w.skyState]}}</div>
            </div>
            <div class="temp">
              {{w.temperature}} °C
              <div v-if="w.humidity==null"></div>
              <div class="hum" v-else> {{w.humidity}} %</div>
              <div v-if="w.pressure==null"></div>
              <div class="press" v-else> {{w.pressure}} Pa</div>
            </div>
            <div class="date" >on: {{new Date(w.timestamp)}} </div>
          </div>
        </div>
      </div>
      <!-- Display Chart-->
      <div class="chart" v-else-if="this.selectedDisplayOption == 'Chart'">
        <canvas id="weatherChart" width="400" height="400"></canvas>
      </div>
      <div v-else>
        <p class="info">Please choose how the data should be displayed ;)</p>
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
      weather:[],
      skyWeather: this.$store.state.skyWeather,
      isLoading: false,
      error: null,
      selectedDisplayOption: '',
      weatherChartData: this.$store.state.weatherChartData,
      displayOptions: {
        layout: {
          color: 'black',
          backgroundColor: 'lightgray',
          selectedColor: 'white',
          selectedBackgroundColor: 'green',
          borderColor: 'black',
          fontFamily: 'Arial',
          fontWeight: 'normal',
          fontWeightSelected: 'bold',
          squareCorners: false,
          noBorder: false
        },
        size: {
          fontSize: 2,
          height: 4,
          padding: 1,
          width: 15
        },
        items: {
          delay: .4,
          preSelected: 'List',
          disabled: false,
          labels: [
            {name: 'List', color: 'white', backgroundColor: 'blue'},
            {name: 'Chart', color: 'white', backgroundColor: 'green'}
          ]
        }
      }
    }
  },
  async created() {
    try {
      this.isLoading = true;
      this.error = null;
      const response = await this.$store.dispatch('getWeatherData', this.key);
      this.weather = response.data;
      this.isLoading = false;
      if(this.weather.length === 0){
        this.error = true;
      }else{
        this.error = null;
      }
    } catch (e) {
      this.isLoading = false;
      this.error = true;
    }
    this.createChart('weatherChart', this.weatherChartData);
  },
  mounted() {
    // this.createChart('weatherChart', this.weatherChartData);
  },
  methods: {
    selectDisplayOption: function (value){
      this.selectedDisplayOption = value;
    },
    createChart(chartId, chartData) {
      const weatherChartObject = document.getElementById(chartId).getContext('2d');
      // console.log("In create:chart");
      // console.log(chartData.type);
      // console.log(chartData.data);
      // console.log(chartData.options);
      const myChart = new Chart(weatherChartObject, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options,
      });
    }
  }
}
</script>