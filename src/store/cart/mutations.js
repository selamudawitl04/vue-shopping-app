export default{
    removeCart:(state,productId)=>{
        state.carts = state.carts.filter(cart=> cart.productId !== productId)
    },
    addToCart(state, cart){
        state.carts.unshift(cart)
    }
}