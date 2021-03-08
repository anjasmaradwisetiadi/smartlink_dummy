import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {digitOnly} from './utilis/directive/numberOnly';
import {alphanumericOnly} from './utilis/directive/alphanumericOnly'
// import filter from './utilis/filter';

import 'tailwindcss/tailwind.css';

Vue.config.productionTip = false;

Vue.directive('digitsOnly',digitOnly);
Vue.directive('alphanumericOnly',alphanumericOnly);

Vue.filter('formatPrice', function (value) {
  let val = (value/1).toFixed(0).replace('.')
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
})

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
