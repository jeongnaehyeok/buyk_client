import Vue from 'vue'
import Router from 'vue-router'
import BuyKMainPage from '@/pages/BuyKMainPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BuyKMainPage',
      components: {
        default: BuyKMainPage,
      }
    },
  ]
})
