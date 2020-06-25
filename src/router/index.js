import Vue from 'vue'
import Router from 'vue-router'

// header
import Header from '@/components/Header'

// page
import IndexPage from '@/pages/IndexPage'
import Listpage from '@/pages/Listpage'

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
  ]
})
