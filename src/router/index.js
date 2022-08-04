import Vue from 'vue'
import Router from 'vue-router'

import Login from '../components/login'
import Home from '../components/Home/home'

console.log(Home);
console.log(Login);
Vue.use(Router);

const routes = [
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
  }

]
const router = new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {

  //直接靠url跳转到其他页面，如果没有登录，将自动跳转
  //到登录页面

  if (window.sessionStorage.getItem('username') === 'vip@163.com') {
    if (to.path = '/login') {return next('/login');}
    return next();
  }
  next();
})

export default router

// export default new Router({
//   routes: [
//     // {
//     //   path: '/',
//     //   name: 'HelloWorld',
//     //   component: HelloWorld
//     // }
//     {
//       path : '/login',
//       name : Login,
//       component : Login
//     }
//   ]
// });
