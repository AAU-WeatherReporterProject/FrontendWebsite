<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="test">Test Api Click</button>
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
      async test() {
      // try{
      //   const response = await this.$store.dispatch('test');
      //   alert(JSON.stringify(response));
      // }
      // catch(e){
      //
      // }
    }
  }
}
</script>