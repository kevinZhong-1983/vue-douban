import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Broadcast from '../pages/Broadcast'
import AudioBook from '../pages/AudioBook'
import Group from '../pages/Group'
import Mine from '../pages/Mine'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path:'/broadcast',
      name:'Broadcast',
      component:Broadcast
    },
    {
      path:'/audiobook',
      name:'AudioBook',
      component:AudioBook
    },
    {
      path:'/group',
      name:'Group',
      component:Group
    },
    {
      path:'/mine',
      name:'Mine',
      component:Mine
    },
    {
      path: '/Index',
      redirect: '/'
    }
  ]
})
