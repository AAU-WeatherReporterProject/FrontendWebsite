<template>
  <div id="input">
    <div class="input-weather">
      <input class="input-temp" type="text" maxlength="3" name="Temperature in Celsius" placeholder="Temperature in Celsius" v-model="temp">
<!--      <select class="input-sky-state" type="text" maxlength="20" name="Temperature in Celsius" placeholder="Temperature in Celsius" v-model="temp">-->

    </div>
    <p> Temperature: test {{temp}}</p>
  </div>
</template>

<script>
export default {
  name: "input",
  data(){
      return {
        temp: ''
      }
  }
}
</script>