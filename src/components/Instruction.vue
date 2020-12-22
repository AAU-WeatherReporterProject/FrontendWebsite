<template>
  <div class="instruction">
    <h1>{{ msg }}</h1>

    <p id="instruction-text">In this App you have the possibility to check detailed weather around you.
      It`s even better - You can help make this information even more detailed by adding
      your weather from your location.</p>
  </div>
</template>

<script>

export default {
  name: 'Instruction',
  components: {},
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>