import Vue from 'vue'
import Router from 'vue-router'

// header
import Header from '@/components/Header'

// page
import IndexPage from '@/pages/IndexPage'
import Listpage from '@/pages/Listpage'
import UserItemPage from '@/pages/UserItemPage'
import LoginPage from '@/pages/LoginPage'
import SignupPage from '@/pages/SignupPage'
import RegisterPage from '@/pages/RegisterPage'

// componet
import Footer from '@/components/Footer'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      components: {
        default: IndexPage,
        footer: Footer,
      }
    },
    {
      path: '/list',
      name: 'List',
      components: {
        header: Header,
        default: Listpage,
        footer: Footer,
      }
    },
    {
      path: '/login',
      name: 'Login',
      components: {
        header: Header,
        default: LoginPage,
        footer: Footer,
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      components: {
        header: Header,
        default: SignupPage,
        footer: Footer,
      }
    },
    {
      path: '/useritem',
      name: 'UserItem',
      components: {
        header: Header,
        default: UserItemPage,
        footer: Footer,
      }
    },
    {
      path: '/register',
      name: 'Register',
      components: {
        header: Header,
        default: RegisterPage,
        footer: Footer,
      }
    },
  ]
})
