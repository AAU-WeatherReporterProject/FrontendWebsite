<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <Instruction msg="Welcome to the Weather-App"></Instruction>
  </div>
</template>

<script>
// @ is an alias to /src
import Instruction from '@/components/Instruction.vue'

export default {
  name: 'Home',
  components: {
    Instruction
  },
  methods: {
  }
}
</script>

<style>

h3 {
  margin: 40px 0 0;
}

.home{
  padding: 10px;
}

p {
  display: block;
  width: 50%;
  padding: 15px;
  margin: auto;
  margin-bottom: 10%;


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
a {
  color: #42b983;
}
</style>