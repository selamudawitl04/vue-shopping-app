import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import productModule from './product/index.js'
import cartModule from './cart/index.js'
import { createStore } from "vuex";

export default createStore({
    modules:{
        product: productModule,
        cart: cartModule
    },
    state(){
        return{
        }
    },
    mutations: mutations,
    actions: actions,
    getters:getters
})
