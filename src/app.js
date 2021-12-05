
// Vuetify
import vuetify from '@/plugins/vuetify'



// Router
import router from '@/plugins/router'

// Moment
import '@/plugins/moment'


export const vm = new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)


