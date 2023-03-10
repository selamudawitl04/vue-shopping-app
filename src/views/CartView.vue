<template>
    <div>
        
        <h2>Your Cart</h2>
        <p class="total-amount">Total Amount: <span>${{ totalAmount }}</span></p>
        <ul>
            <li v-for="cart in $store.getters.getCarts" 
                :key="cart.productId"
                >
                <cart-list :cart="cart"></cart-list>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
import CartList from "@/components/cart-resources/CartList.vue";
// import DialogView from "@/components/layout/DialogView.vue";
export default{
    data(){
        return{
           
        }
    },
    components:{
        CartList
        
    },
    computed:{
        ...mapGetters({
            getProduct:'getProduct',
            getCarts: 'getCarts',
            totalAmount: 'getTotalAmount',
            
        })
    }
}
</script>
<style scoped>
h2{
    text-align: center;
    border-bottom: 0.2rem solid gray;
    padding: 0.5rem 0;
    width: 90%;
    max-width: 50rem;
    margin: auto;
}
.total-amount{
    text-align: center;
}
.total-amount span{
    background-color: blueviolet;
    padding: 0 1rem;
    border-radius: 1rem;
}

</style>
