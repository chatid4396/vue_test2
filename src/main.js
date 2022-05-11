import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import request from './api/request';


Vue.config.productionTip = false
Vue.prototype.$http = request;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
