import Vue from 'vue'
import Router from 'vue-router'

import Login from '../components/login'


Vue.use(Router)

const routes = [
  {
    path : '',
    redirect: '/login'
  },
  {
    path : '/login',
    component: Login
  }

]
const router = new Router({
  routes,
  mode: 'history',
  linkActiveClass: 'active'
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
