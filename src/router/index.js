import Vue from 'vue'
import Router from 'vue-router'
// page
import IndexPage from '@/pages/IndexPage'

// componet
import Footer from '@/components/Footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'IndexPage',
      components: {
        default: IndexPage,
        footer: Footer,
      }
    },
  ]
})
