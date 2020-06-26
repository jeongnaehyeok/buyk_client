import Vue from 'vue'
import Router from 'vue-router'

// header
import Header from '@/components/Header'

// page
import IndexPage from '@/pages/IndexPage'
import Listpage from '@/pages/Listpage'
import UserItemPage from '@/pages/UserItemPage'
import LoginPage from '@/pages/LoginPage'

// componet
import Footer from '@/components/Footer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      components: {
        default: IndexPage,
        footer: Footer,
      }
    },
    {
      path: '/list',
      name: 'Listpage',
      components: {
        header: Header,
        default: Listpage,
        footer: Footer,
      }
    },
    {
      path: '/login',
      name: 'LoginPage',
      components: {
        header: Header,
        default: LoginPage,
        footer: Footer,
      }
    },
    {
      path: '/useritem',
      name: 'UserItemPage',
      components: {
        header: Header,
        default: UserItemPage,
        footer: Footer,
      }
    },
  ]
})
