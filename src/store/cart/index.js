import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
export default{
    state(){
        return{
            carts: [
                {
                    productId: 1,
                    quantity: 3
                },
                {
                    productId: 2,
                    quantity: 4
                },
                {
                    productId: 3,
                    quantity: 2
                }
            ]
        }
    },
    mutations: mutations,
    actions: actions,
    getters:getters
}
