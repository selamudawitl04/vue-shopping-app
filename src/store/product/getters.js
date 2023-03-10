export default{
    getProducts(state){
        return state.products
    },
    getProduct:(state)=>(productId)=>{
        return state.products.find(product => product.id == productId)
    }
}