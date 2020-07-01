import {
    GET_LIST,
    DETAIL_BIKE
} from './mutations-types'

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
    }
}