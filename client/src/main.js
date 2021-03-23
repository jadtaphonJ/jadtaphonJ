import Vue from 'vue'
import App from './App.vue'
import { defineCustomElements as defineIonPhaser } from '@ion-phaser/core/loader'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false
Vue.config.ignoredElements = [/ion-\w*/]

defineIonPhaser(window)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
