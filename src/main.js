import Vue from 'vue'
import Vuesax from 'vuesax'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vuesax/dist/vuesax.css'
import VueCookies from 'vue-cookies'
import './assets/css/style.css'

Vue.use(Vuesax, {})
Vue.config.productionTip = false
Vue.use(VueCookies, {})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
