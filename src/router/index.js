import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/login'

import Hello from '@/components/Hello'

import Addmovies from '@/components/movies/add'
import Addtev from '@/components/tev/add'
import Addlife from '@/components/life/add'
import Addnews from '@/components/news/add'
import Addcomic from '@/components/comic/add'

import Detail from '@/components/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/hello/:id',
      name: 'Hello',
      component: Hello
    },
    {
      path:'/movies/add',
      name:'Addmovies',
      component:Addmovies
    },
    {
      path:'/tev/add',
      name:'Addtev',
      component:Addtev
    },
    {
      path:'/life/add',
      name:'Addlife',
      component:Addlife
    },
    {
      path:'/comic/add',
      name:'Addcomic',
      component:Addcomic
    },
    {
      path:'/news/add',
      name:'Addnews',
      component:Addnews
    },
    {
      path:'/hello/detail/view',
      name:'Detail',
      component:Detail
    }
  ]
})
