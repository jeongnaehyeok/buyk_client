import Cookies from 'js-cookie'

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

Vue.config.productionTip = false

const init = () => {
  const savedToken = Cookies.get('accessToken')
  if(savedToken){
    return store.dispatch('signinByToken', savedToken)
  }
  else{
    return Promise.resolve()
  }
}

init().then(res => {
  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
  })
})
