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
  margin: 5px;
  padding: 5px;
}

form [class^="input"] {
   display: block;
   width: 100%;
   padding: 15px;
   margin: 5px;

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

input[class^="input"]:focus{
  box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 1);
  border-radius: 16px 0px 16px 0px;
}

.left{
  width: 12%;
}

label{
  color: #FFF;
  font-size: 25px;
  font-weight: 700;
  font-style: italic;
  text-shadow: 3px 6px rgba(0, 0, 0, 0.25);
}

button{
  padding: 15px;
  margin: 5px;
  border-radius: 16px 0px 16px 0px;
}
</style>