import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//axios
import http from './api/index'
Vue.prototype.$http=http

// 按需引入vant
import 'vant/lib/index.css'
import '../src/vant/vant.js'
import './assets/js/rem.js'


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
