// Vue instance
import '@/bootstrap'
Vue.config.productionTip = false
import App from '@/layout/App'


// Toast notification
import toastr from 'toastr'
import 'toastr/build/toastr.min.css'
toastr.options = {
  debug: false,
  closeButton: true,
  newestOnTop: true,
  progressBar: true,
  timeOut: 6000,
  fadeIn: 300,
  fadeOut: 1000,
  extendedTimeOut: 6000,
  preventDuplicates: true,
  positionClass: 'toast-bottom-right'
}
Vue.prototype.toastr = toastr

// Validator
//import '@/plugins/vee-validate'

// Vuetify
import vuetify from '@/plugins/vuetify'

// Locale
import VueI18n from 'vue-i18n'
const i18n = new VueI18n({
  locale: 'es'
})

// Router
import router from '@/plugins/router'

// Vuex
//import Vuex from 'vuex'
//import StoreData from '@/store'
//const store = new Vuex.Store(StoreData)

// Moment
import '@/plugins/moment'

// Filters
//import '@/plugins/filters'

// Map
//import '@/plugins/map'



export const vm = new Vue({
  router,
  i18n,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)


