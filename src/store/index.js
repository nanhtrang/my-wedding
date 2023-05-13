import Vue from 'vue'
import Vuex from 'vuex'
import wishModule from '@/store/modules/wishModule'
import appModule from '@/store/modules/appModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    wishModule,
    appModule
  }
})
