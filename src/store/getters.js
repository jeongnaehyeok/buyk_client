export default {
    isAuthorized(state){
        return state.accessToken.length > 0 && !!state.me
    },
    isAuthor(state){
        return state.item.username == state.me.username
    }
}