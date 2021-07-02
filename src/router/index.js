import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/index'
import Dashboard from '../components/Dashboard'

Vue.use(VueRouter);

let router = new VueRouter({
  mode:'history',
  routes:[
    {
      past:'/', name: 'Home', component: Home
    },

    {
      path:'/dashboard',
      name:'Dashboard',
      component: Dashboard,
      props: true
    }
  ]
})

export default router;

