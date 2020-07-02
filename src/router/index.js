import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

// header
import Header from '@/components/Header'

// page
import IndexPage from '@/pages/IndexPage'
import Listpage from '@/pages/Listpage'
import UserItemPage from '@/pages/UserItemPage'
import LoginPage from '@/pages/LoginPage'
import SignupPage from '@/pages/SignupPage'
import RegisterPage from '@/pages/RegisterPage'
import DetailPage from '@/pages/DetailPage'

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
      path: '/list/',
      name: 'List',
      components: {
        header: Header,
        default: Listpage,
        footer: Footer,
      },
    },
    {
      path: '/login',
      name: 'Login',
      components: {
        header: Header,
        default: LoginPage,
        footer: Footer,
      },
      beforeEnter(to, from, next){
        const { isAuthorized } = store.getters
        if(isAuthorized){
          alert('이미 로그인 상태입니다!')
          next({ name: 'List'})
        }
        next()
      }
    },
    {
      path: '/signup',
      name: 'Signup',
      components: {
        header: Header,
        default: SignupPage,
        footer: Footer,
      },
      beforeEnter(to, from, next){
        const { isAuthorized } = store.getters
        if(isAuthorized){
          alert('이미 로그인 상태입니다!')
          next({ name: 'List'})
        }
        next()
      }
    },
    {
      path: '/useritem',
      name: 'UserItem',
      components: {
        header: Header,
        default: UserItemPage,
        footer: Footer,
      },
      beforeEnter(to, from, next){
        const { isAuthorized } = store.getters
        if(!isAuthorized){
          alert('로그인이 필요합니다!')
          next({ name: 'Login'})
        }
        next()
      }
    },
    {
      path: '/register',
      name: 'Register',
      components: {
        header: Header,
        default: RegisterPage,
        footer: Footer,
      },
      beforeEnter(to, from, next){
        const { isAuthorized } = store.getters
        if(!isAuthorized){
          alert('로그인이 필요합니다!')
          next({ name: 'Login'})
        }
        next()
      }
    },
    {
      path: '/bike/:bikeId',
      name: 'Detail',
      components: {
        header: Header,
        default: DetailPage,
        footer: Footer,
      },
      props: {
        default: true
      }
    },
  ]
})
