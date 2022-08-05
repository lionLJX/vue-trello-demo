import Vue from 'vue'
import Router from 'vue-router'

import Login from '../components/login'
import Home from '../components/Home/home'

console.log(Home);
console.log(Login);
Vue.use(Router);

// const routes = [
//   {
//     path : '/',
//     redirect: '/login'
//   },
//   {
//     path : '/login',
//     component: Login
//   },
//   {
//     path : '/home',
//     component : Home
//   }

// ]
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
    }
  ],
  mode: 'history',
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {

  //直接靠url跳转到其他页面，如果没有登录，将自动跳转
  //到登录页面
  const status = window.sessionStorage.getItem('useremail');
  if (status == 'vip@163.com' && to.path == '/login') {
    // if (to.path = '/login') return next('/home');
    // return next('/login');
    next('/home');
  }else if (to.path == '/home' && status == null){
    console.log(status);
  next('/login')}
  else next();
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
