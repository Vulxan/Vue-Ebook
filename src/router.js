import Vue from 'vue'
import Router from 'vue-router'
import Ebook from './views/Ebook.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Ebook
    }
  ]
})
