<template>
 <div class="inputWeather">
   <h1>Input your Weather-Data</h1>
  <Input></Input>
 </div>
</template>

<script>
// @ is an alias to /src
import Input from "@/components/WeatherInput.vue";

export default {
  name: 'inputWeather',
  components: {
    Input
  },
  methods: {

  }
}

</script>

<style>

#input{
  padding: 5px;
}

.input-weather .input-temp{
   display: block;
   width: 100%;
   padding: 15px;

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


.input-weather .input-temp:focus{
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 16px 0px 16px 0px;
}

</style>