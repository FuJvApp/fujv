<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
<<<<<<< HEAD
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    text-align: center;
  }
=======
  html{
    font-size: 62.5%;
  }
  @media only screen and (min-width: 700px) {
    html{
      font-size: 87.5% !important;
    }
  }
  @media only screen and (min-width: 1000px) {
    html{
      font-size: 100% !important;
    }
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  text-align: center;
}
>>>>>>> df8871b78e038e2715d997bf89dd0d2cb2d2914f
</style>
