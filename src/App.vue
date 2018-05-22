<template>
  <div id="app">
    <img src="./assets/logo.png" style="width:33%;">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
body {
  background-color: #eee;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 450px;
  color: #2c3e50;
  background-color: #fff;
  margin: 40px auto;
  padding: 30px;
  border: 1px solid #ccc;
  box-shadow: 10px 10px 10px #ccc;
}
</style>
