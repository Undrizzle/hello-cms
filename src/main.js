import Vue from 'vue'
import mavonEditor from 'mavon-editor'
import ElementUI from 'element-ui'

import App from './App.vue'

import 'mavon-editor/dist/css/index.css'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(mavonEditor)
Vue.use(ElementUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
