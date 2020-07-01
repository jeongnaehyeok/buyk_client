import api from '@/api'
import {
    GET_LIST,
    DETAIL_BIKE
} from './mutations-types'

const getList = ({commit}, filter) => {
    return api.get('/list/', filter)
        .then(res => {
            commit(GET_LIST, res.data)
        })
}
const detailBike = ({commit}, id) => {
    return api.get(`/${id}`)
        .then(res => {
            commit(DETAIL_BIKE, res.data)
        })
}

export default{
    getList,
    detailBike
}