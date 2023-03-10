<template>
    <ul>
        <li v-for="product in $store.getters.getProducts" :key="product.id">
            <product-list :product="product"></product-list>
        </li>
    </ul>
    
</template>
<script>
import ProductList from '@/components/product-resources/ProductList.vue';
export default{
    components:{
        ProductList
    },
    data(){
        return{

        }
    }
}
</script>
<style>
ul{
    list-style: none;
    
}

</style>