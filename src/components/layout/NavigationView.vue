<template>
    <div class="container">
        <h1>VueShop</h1>
        <div class="middle-nav">
            <p class="product">
                <router-link to="/"> Product</router-link>
            </p>
            <p class="cart">
                <router-link to="/cart"> Cart</router-link>
            </p>
            <p class="howmany">{{ cartLength }}</p>
        </div>
        <button>Login</button>
    </div>
</template>
<script>
import { mapGetters } from 'vuex';
export default{
    computed:{
        ...mapGetters({
            cartLength: 'cartLength'
        })
    }
}
</script>
<style scoped>

.container{
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: auto;
    padding: 0;
    
    max-width: 65rem;
}
.middle-nav{
    display: flex;
    justify-content: center;
    text-align: right;

}
.middle-nav p{
    padding: 0.25rem 1.3rem;
    font-weight: bold;

}
.howmany{
    background-color: blueviolet;
    border-radius: 0.75rem;
    color: white;
}
h1{
    font-weight: bold;
    font-size:2.5rem;
}
button{
    font:inherit;
    cursor: pointer;
    padding: 0.25rem 1rem;
    background-color: transparent;
    border: 1px solid rebeccapurple;
    border-radius: 1.25rem;
}
button:hover{
    background-color: rebeccapurple;
}
</style>