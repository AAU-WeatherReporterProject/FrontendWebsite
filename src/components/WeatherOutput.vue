<template>
  <div id="output">
    <div class="location"> in: {{ key }} <br>
      the Average Temperature is: {{average}}</div>
    <div v-if="error">
      <p class="info">No Weather Data created yet. Please use
        <router-link :to="'/inputWeather'">"Input Weather"</router-link>
        to do so.
      </p>
    </div>
    <div v-else-if="isLoading">
      <p class="info">Loading...</p>
    </div>
    <div v-else class="weather-output">
      <div>
        <p class="info">Here you can choose how the data should be displayed:</p>
        <toggle-switch
            :options="displayOptions"
            @input="selectDisplayOption($event)"
            v-model="selectedDisplayOption"
        />
      </div>
      <!-- Display List-->
      <div v-if="selectedDisplayOption == 'List'">
        <div v-for="w in weather">
          <div class="weather-box">
            <div class="sky-state">
              <div>{{ skyWeather[w.skyState] }}</div>
            </div>
            <div class="temp">
              {{ w.temperature }} °C
              <div v-if="w.humidity==null"></div>
              <div class="hum" v-else> {{ w.humidity }} %</div>
              <div v-if="w.pressure==null"></div>
              <div class="press" v-else> {{ w.pressure }} hPa</div>
            </div>
            <div class="date">on: {{ new Date(w.timestamp) }}</div>
          </div>
        </div>
      </div>
      <!-- Display Chart-->
      <div class="chart" v-else-if="selectedDisplayOption == 'Chart'">
        <WeatherChart v-bind:weatherData=weather></WeatherChart>
      </div>
      <div v-else>
        <p class="info">Please choose how the data should be displayed ;)</p>
      </div>
    </div>
  </div>
</template>

<script>
import WeatherChart from "@/components/WeatherChart";

export default {
  name: "output",
  components: {WeatherChart},
  data() {
    return {
      key: this.$route.params.key,
      weather: [],
      average: 0.0,
      countTemps: 0,
      skyWeather: this.$store.state.skyWeather,
      isLoading: false,
      error: null,
      selectedDisplayOption: '',
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
      if (this.weather.length === 0) {
        this.error = true;
      } else {
        this.error = null;
      }
    } catch (e) {
      this.isLoading = false;
      this.error = true;
    }

    this.computeAverage(this);
  },
  methods: {
    selectDisplayOption: function (value) {
      this.selectedDisplayOption = value;
    },
    computeAverage(vueScope){
      vueScope.average = 0;
      vueScope.countTemps = 0;
      vueScope.weather.forEach(buildSum);

      function buildSum(item) {
        var temp = parseFloat(item.temperature);
        vueScope.average += temp;
        vueScope.countTemps++;
      }
      vueScope.average = vueScope.average / vueScope.countTemps;
      vueScope.average = parseFloat(vueScope.average.toFixed(2));
    }
  }
}
</script>