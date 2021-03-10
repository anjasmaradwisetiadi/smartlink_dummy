import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store/index';

import Home from '../views/Home.vue';
import DetailFaktur from '../views/DetailFaktur.vue'
import PageNotFound from '../views/PageNotFound.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/detail-faktur',
    name: 'detail-faktur',
    component: DetailFaktur,
    beforeEnter(to, from, next){
      if(store.state.navigationGuard){
        next(true)
      }
      else{
        next('/home')
      }
    }
  },
  {path:'*', component:PageNotFound}
];


const router = new VueRouter({
  routes,
  mode:'history'
});

router.beforeEach((to, from, next) => {
  console.log("global navigation route")
  next(true)
})


export default router;
