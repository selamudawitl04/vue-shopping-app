<template>
  <div>
      <navigation-view></navigation-view>
      <router-view v-slot="slotProps">
          <transition name="route" mode="out-in">
              <component :is="slotProps.Component"></component>
          </transition>
      </router-view>
  </div>
</template>
<script>
import NavigationView from './components/layout/NavigationView.vue'
import CartView from './views/CartView.vue';
import ProductView from './views/ProductView.vue';
export default{
  components:{
      NavigationView,
      ProductView,
      CartView
  }
}
</script>
<style>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body{
  margin: 0;
  /* scroll-margin: 40px; */
  overflow-y: scroll;
}
.route-enter-from{
  opacity: 0;
  /* transform: translateX(-40px); */
}
.route-enter-to, .route-leave-from{
  opacity: 1;
  /* transform: translateX(0); */
}
.route-enter-active{
  transition: all 0.3s linear;
}

.route-leave-active{
  transition: all 0.3s linear;
}
.route-leave-to{
  opacity: 0;
  /* transform: translateX(-40px); */
}
</style>