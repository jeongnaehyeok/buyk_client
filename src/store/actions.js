import api from '@/api'
import {
    GET_LIST,
    DETAIL_BIKE,
    SET_ACCESS_TOKEN,
    SET_MY_INFO,
    DESTROY_ACCESS_TOKEN,
    DESTROY_MY_INFO
} from './mutations-types'

const getList = ({commit}, filter) => {
    return api.get('/api/bikes/list/', {params: {...filter}})
        .then(res => {
            commit(GET_LIST, res.data)
        })
}
const detailBike = ({commit}, id) => {
    return api.get(`/api/bikes/${id}`)
        .then(res => {
            commit(DETAIL_BIKE, res.data)
            return res.data
        })
}

const login = ({commit}, { name, password}) => {
    return api.post('/rest-auth/login/', {username:name, password})
        .then(res=>{
            const { token, user } = res.data
            commit(SET_MY_INFO, user)
            commit(SET_ACCESS_TOKEN, token)
        })
}

const signup = ({commit}, { name, password1, password2}) =>{
    return api.post('/rest-auth/registration/', {username:name, password1, password2})
        .then(res => {
            const { token, user } = res.data
            commit(SET_ACCESS_TOKEN, token)
            commit(SET_MY_INFO, user)
        })
}

const signinByToken = ({commit}, token) => {
    commit(SET_ACCESS_TOKEN, token)
    return api.get('/rest-auth/user/')
        .then(res => {
            commit(SET_MY_INFO, res.data)
        })
}

const getRegistList = ({commit})=>{
    return api.get('/api/bikes/list/register/')
        .then(res => {
            commit(GET_LIST, res.data)
        })
}

const logout = ({commit}) => {
    commit(DESTROY_ACCESS_TOKEN)
    commit(DESTROY_MY_INFO)
}

export default{
    getList,
    detailBike,
    login,
    signup,
    signinByToken,
    getRegistList,
    logout,
}