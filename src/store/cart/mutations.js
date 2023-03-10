export default{
    removeCart:(state,productId)=>{
        state.carts = state.carts.filter(cart=> cart.productId !== productId)
        state.cartAlert = true

    },
    addToCart(state, cart){
        state.carts.unshift(cart)
        state.productAlert = true
    },
    changeCartAlert(state){
        state.cartAlert = !state.cartAlert
    },
    changeProductAlert(state){
        state.productAlert = !state.productAlert
    }
}