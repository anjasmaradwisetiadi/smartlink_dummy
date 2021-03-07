import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import DetailFaktur from '../views/DetailFaktur.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/detail-faktur',
    name: 'detail-faktur',
    component: DetailFaktur,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
