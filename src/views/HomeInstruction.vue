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