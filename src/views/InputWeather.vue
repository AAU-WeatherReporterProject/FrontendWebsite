<template>
 <div class="inputWeather">
   <h1>Input your Weather-Data</h1>
  <Input></Input>
 </div>
</template>

<script>
// @ is an alias to /src
import Input from "@/components/Input.vue";

export default {
  name: 'inputWeather',
  components: {
    Input
  },
  methods: {

  }
}

</script>