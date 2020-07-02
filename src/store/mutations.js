import {
    GET_LIST,
    DETAIL_BIKE,
    SET_ACCESS_TOKEN,
    SET_MY_INFO,
    DESTROY_ACCESS_TOKEN,
    DESTROY_MY_INFO,
} from './mutations-types'
import api from '@/api'
import Cookies from 'js-cookie'

export default{
    [GET_LIST](state, payload){
        state.items = [...payload]
    },
    [DETAIL_BIKE](state, payload){
        state.item = {...payload}
        state.payment_method = {...payload.payment_method}
    },
    [SET_ACCESS_TOKEN](state, token){
        if(token){
            state.accessToken = token
            api.defaults.headers.common.Authorization = `jwt ${token}`
            Cookies.set('accessToken', token)
        }
    },
    [SET_MY_INFO](state, user){
        state.me = user
    },
    [DESTROY_ACCESS_TOKEN](state){
        state.accessToken = ''
        delete api.defaults.headers.common.Authorization
        Cookies.remove('accessToken')
    },
    [DESTROY_MY_INFO](state){
        state.me = null
    },
}