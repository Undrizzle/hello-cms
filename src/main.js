import Vue from 'vue'
import mavonEditor from 'mavon-editor'
import ElementUI from 'element-ui'
import VabIcon from 'vab-icon'
import router from './router'
import store from './store'
import Vab from './utils/vab'

import App from './App.vue'

import 'mavon-editor/dist/css/index.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(mavonEditor)
Vue.use(ElementUI)
Vue.component('vabIcon', VabIcon)
Vue.use(Vab)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
