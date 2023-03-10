export default{
    getCarts(state){
        return state.carts
    },
    getCart: (state)=>productId=>{
        return state.carts.find(cart=>cart.productId == productId)
    },
    getTotalAmount(state, rootGetters){
        let total = 0
        for(let i = 0 ;i < state.carts.length; i++){
            total+= rootGetters.getProduct(state.carts[i].productId).price * state.carts[i].quantity
        }
        return total.toFixed(2)
    },
    cartLength(state){
        return state.carts.length
    },
    getCartAlert(state){
        return state.cartAlert
    },
    getProductAlert(state){
        return state.productAlert
    }
}