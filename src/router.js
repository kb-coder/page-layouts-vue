import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import DefaultLayout from '@/layouts/default'
import SecondLayout from '@/layouts/second'
import Header from '@/components/header'
import ShoutOut from '@/components/shout-out'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (about.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
        }
      ]
    },
    {
      path: '/shout-out',
      component: SecondLayout,
      children: [
        {
          path: '',
          name: 'shoutout',
          components: {
            header: Header,
            content: ShoutOut
          }
        }
      ]
    }
  ]
})
