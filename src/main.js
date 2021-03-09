import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import {digitOnly} from './utilis/directive/numberOnly';
import {alphanumericOnly} from './utilis/directive/alphanumericOnly'
import filter from './utilis/filter';

import 'tailwindcss/tailwind.css';

Vue.config.productionTip = false;

Vue.directive('digitsOnly',digitOnly);
Vue.directive('alphanumericOnly',alphanumericOnly);

Vue.use(filter);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
