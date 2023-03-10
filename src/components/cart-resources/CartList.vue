<template>
    <div class="cart-container">
        <img src="../../assets/tour-7-cover.jpg" alt="product image">
        <p class="product-name">{{$store.getters.getProduct(cart.productId).name}}</p>
        <div class="price-and-quantity">
            <p>Price per item:  <b>${{$store.getters.getProduct(cart.productId).price}}</b></p>
            <p>Quantity: <b>{{ cart.quantity }}</b></p>
        </div>
        <p class="total-price">Total <b>${{totalPrice}}</b></p>
        <button @click="removeCart(cart.productId)">Remove </button>
    </div>
</template>
<script>

import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';
export default{
    props:['cart'],
    computed:{
        totalPrice(){
            return Math.round( this.getProduct(this.cart.productId).price * this.cart.quantity)
        },
        ...mapGetters({
            getProduct: 'getProduct',
        })
    },
    methods:{
        ...mapActions({
            removeCart:'removeCart'
        })
    }
    

}
</script>
<style scoped>

.cart-container{
    background-color: white;
    width: 90%;
    max-width: 30rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 1rem auto;
}
.price-and-quantity{
    display: flex;
    justify-content: space-between;
}
img{
    display: block;
    width: 5rem;
    height: 4rem;
    margin: auto;
    border-radius: 40rem;
}
.product-name{
    text-align: center;
    font-weight: bold;

}
.total-price{
    text-align: center;
    border-top: 1px solid gray;
    border-bottom: 2px solid gray;
    padding: 0.25rem;

}
button{
    font:inherit;
    cursor: pointer;
    background-color: brown;
    color: white;
    padding: 0.25rem 1rem;
    border: none;
    border-radius: 1rem;
    display: block;
    margin: auto;
}
</style>