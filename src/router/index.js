import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Login from'@/components/Login'
import Register from '@/components/Register'
import Profile from '@/components/Profile'
import Edit from '@/components/Edit'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
     {
      path: '/Login',
      name: 'Login',
      component: Login
    },
     {
      path: '/Register',
      name: 'Register',
      component: Register
    },
    {
      path: '/Profile/:id',
      name: 'Profile',
      component: Profile
    },
      {
      path: '/Edit/:id',
      name: 'Edit',
      component: Edit
    },
  ]
})
