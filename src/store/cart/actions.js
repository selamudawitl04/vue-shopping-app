export default{
    removeCart:(context, productId)=>{
        context.commit('removeCart', productId)
    },
    addToCart(context, cart){
        console.log(cart)
        context.commit('addToCart', cart)
    }
}