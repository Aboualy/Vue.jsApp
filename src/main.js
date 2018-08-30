import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import 'vue-material/dist/theme/default.css'

import Vuetify from 'vuetify'
Vue.config.productionTip = false
Vue.use(VueMaterial)
Vue.use(Vuetify)
new Vue({
  render: h => h(App)
}).$mount('#app')
