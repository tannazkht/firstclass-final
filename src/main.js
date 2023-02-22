import Vue from 'vue'
import App from './App.vue'
// import ParticlesJs from './components/ParticlesJs.vue'


Vue.config.productionTip = false

/* eslint-disable no-new*/
new Vue({
  render: h => h(App),
  el: "#app",
  components: { App },
  template: "<App/>"
}).$mount('#app')
