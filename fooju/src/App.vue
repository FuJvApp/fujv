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

  html,body{
    width: 100%;
    height: 100%;
    font-size: 62.5%;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  padding: 0;
  width: 100%;
  text-align: center;
}
  #app>div{
    height: 100%;
  }
</style>
