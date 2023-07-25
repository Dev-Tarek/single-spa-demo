<template>
  <div id="app" class="bg-orange m-4">
    <div class="m-4">
      <p style="text-align: center">Vue App [2]</p>
      <router-view />
      <shared-component title="Global variable">
        {{ $store.state.test.var }}
      </shared-component>
      <button @click="increment">Increment</button>
    </div>
  </div>
</template>

<script>
import { SharedComponent } from '@portal/utils'

export default {
  name: 'App',
  components: {
    SharedComponent,
  },
  watch: {
    '$route.path': {
      handler(route) {
        console.log('Vue App route:', route)
      },
    },
  },
  methods: {
    increment() {
      this.$store.state.test.var++
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
