<template>
  <div id="app">
    <test />
  </div>
</template>

<script>
import test from './components/test.vue'
export default {
  name: 'app',
  components: {
    test
  }
}
</script>

<style>
#app {
  height:100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
