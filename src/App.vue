<template>
  <div id="app">
    <particles/>
    <FirstClass msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

import FirstClass from './components/FirstClass.vue'
import particles from "./components/particles"

export default {
  name: 'App',
  components: {
    FirstClass,
    particles,
  }
}
</script>

<style>
</style>
