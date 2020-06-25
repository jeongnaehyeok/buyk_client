import api from '@/api'
import {
    TYPEINSEARCH,
    GETLIST
} from './mutations-types'

const typeInSearch = ({ commit }, search) => {
    if(!!search){
        api.get('/list/')
        .then(res => {
            commit(TYPEINSEARCH, search)
            commit(GETLIST, res.data)
        })
    }
    else{
        api.get('/list/')
        .then(res => {
            commit(TYPEINSEARCH, search)
            commit(GETLIST, res.data)
        })
    }
}
const filterList = ({ commit }, payload) =>{
    api.get('/list/', payload)
        .then(res => {
            commit(GETLIST, res.data)
        })
}

export default{
    typeInSearch,
    filterList
}