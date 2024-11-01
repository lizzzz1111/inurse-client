import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import './plugins/element-ui'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/http'
Vue.use(Mint)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
