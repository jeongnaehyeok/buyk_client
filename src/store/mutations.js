import {
    TYPEINSEARCH,
    GETLIST
} from './mutations-types'

export default{
    [TYPEINSEARCH](state, search){
        state.buykFilter.model = search
    },
    [GETLIST](state, payload){
        state.items = [...payload]
    }
}