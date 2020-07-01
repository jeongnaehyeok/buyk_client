import {
    GET_LIST,
    DETAIL_BIKE,
    SET_ACCESS_TOKEN,
    SET_MY_INFO
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
        const BeforeShow = localStorage.BeforeShow ? JSON.parse(localStorage.BeforeShow) : [];
        if(BeforeShow.length > 4) BeforeShow.splice(0, 1)
        const findIndex = BeforeShow.findIndex(v => v.id == payload.id)
        if(findIndex>-1){
            BeforeShow.splice(findIndex, 1)
        }
        BeforeShow.push(payload)
        const jsonBeforeShow = JSON.stringify(BeforeShow)
        localStorage.setItem('BeforeShow', jsonBeforeShow)
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
    }
}