import Vue from 'vue'
import App from '@/App.vue'
import '@/registerServiceWorker'
import router from '@/router'
import store from '@/store'
import '@/plugins/element-ui'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/http'
import '@/store';
import VueAwesomeSwiper from "vue-awesome-swiper";


//element-UI 平台端
//mint-UI 移动端
Vue.use(Mint)
Vue.use(VueAwesomeSwiper /* { default options with global component } */);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
