<template>
  <div id="app" class="bg-green">
    <img alt="Vue logo" src="./assets/logo.png">
    <ul>
      <li><router-link to="/vue/dashboard">Vue App dashboard</router-link></li>
      <li><router-link to="/vue/apps">Vue App apps</router-link></li>
      <li><router-link to="/vue/settings">Vue App settings</router-link></li>
      <li><router-link to="/vue/user">Vue App user</router-link></li>
      <li><router-link to="/react">React App</router-link></li>
    </ul>
    <div id="app-container-el"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-bottom: 4px;
}
</style>
