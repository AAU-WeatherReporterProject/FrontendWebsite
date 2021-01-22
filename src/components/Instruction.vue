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

<