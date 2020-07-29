import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import './cube-ui'
import './register'

import 'common/stylus/index.styl'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
