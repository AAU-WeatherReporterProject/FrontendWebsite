<template>
  <div id="input">
    <input type="text" maxlength="3" name="Temperature in Celsius" v-model="temp">
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