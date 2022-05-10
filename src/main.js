import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';  //引入axios
import VueAxios from 'vue-axios';  // 引入vue-axios
import store from './store/index';


Vue.config.productionTip = false
Vue.use(VueAxios,axios);  //使用



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
