<template>
  <div id="app">
    <div id="nav">
      <router-link id="home-link" to="/">Home</router-link>
      |
      <router-link id="check-ov-link" to="/overviewWeather">Weather Overview</router-link>
      |
      <router-link id="input-w-link" to="/inputWeather">Input Weather</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>

* {
  box-sizing: border-box;
}

body, html {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, 'montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  transition: 0.4s;
  /* that the side is better readable, some blackish overlay*/
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.75));
  height: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
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

.info {
  display: block;
  width: 50%;
  padding: 15px;
  margin: auto;
  margin-bottom: 10px;


  color: #313131;
  font-size: 20px;

  appearance: none;
  border: none;
  outline: none;
  background: none;

  box-shadow: 0 0 8px rgba(0, 0, 0, 0.25);
  background-color: rgba(255, 255, 255, 0.75);
  border-radius: 0 16px 0 16px;
  transition: 0.4s;
}

</style>
