<template>
    <div class="card-container">
       <div class="product-body">
            <img src="../../assets/tour-7-cover.jpg" alt="product image">
            <div class="about-product">
                <h2>{{product.name}}</h2>
                <p class="price">{{ product.price }}</p>
                <p>{{ product.descrption }}</p>
            </div>
       </div>
       <p class="product-footer"><button @click="addToCart({productId:product.id, quantity: 3})">Add to Cart</button></p>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
export default{
    props: ['product'],
    methods:{
        ...mapActions({
            addToCart: 'addToCart'
        })
    }
}</script>
<style scoped>
.card-container{
    width: 90%;
    max-width: 50rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;
    margin: 1.5rem auto;
}
.product-body{
    display:flex;
}
.product-footer{
    text-align: center;
    margin: 0.25rem
}
img{
    flex: 25%;
    width: 10%

}
.about-product{
    flex: 75%;
    width: 75%;
    margin: 0 1.25rem;
}
button{
    font: inherit;
    background-color: blueviolet;
    border: none;
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 1rem;

}
.price{
    background-color: gold;
    width: 5rem;
    padding: 0.25rem;
    text-align: center;
    border-radius: 1rem;
    margin-top: 0;
}
h2{
    margin: 0.25rem auto;
}
</style>