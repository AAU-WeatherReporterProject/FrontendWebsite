<template>
  <div id="app">
    <div id="nav">
      <router-link id="home-link" to="/">Home</router-link> |
      <router-link id="check-w-link" to="/checkWeather">Check Weather</router-link> |
      <router-link id="input-w-link" to="/inputWeather">Input Weather</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>

*{
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, 'montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  /*background-image: url("./assets");*/
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
  /* that the side is better readable, some blackish overlay*/
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));

}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #298e8e;
  /*color: #42b983; #295c8e */
}

</style>
