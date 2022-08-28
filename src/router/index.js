import Vue from 'vue'
import Router from 'vue-router'

import Login from '../pages/Login.vue'
import Home from '../pages/Home.vue'
import Recovery from '../pages/Recovery.vue'

// console.log(Home);
// console.log(Login);
Vue.use(Router);

const router = new Router({
  routes : [
    {
      path : '/',
      redirect: '/login'
    },
    {
      path : '/login',
      component: Login
    },
    {
      path : '/home',
      component : Home
    },
    {
      path : '/recovery',
      component : Recovery
    }
  ],
  mode: 'history',
  // linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {

  //直接靠url跳转到其他页面，如果没有登录，将自动跳转
  //到登录页面
  const status = window.localStorage.getItem('useremail');
  if(to.path == '/recovery') {
    if(status != 'vip@163.com') next('/login')
    else next()
    return
  }
  
  if (status == 'vip@163.com' && to.path == '/login')
    next('/home');
  else if (to.path == '/home' && status == null){
  next('/login')}
  else next();
})

export default router
