
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
export default{
    state(){
        return{
            products:[
                {   id: 1,
                    name: 'Book Collection',
                    photoUrl: '../assets/tour-7-cover.jpg',
                    price:99.99,
                    descrption: 'A collection of book must read All times classical included'
                },
                {
                    id: 2,
                    name: 'Food Items',
                    photoUrl: '',
                    price:99.99,
                    descrption: 'A collection of book must read All times classical included'
                },
                {
                    id: 3,
                    name: 'Sport Equipment',
                    photoUrl: '',
                    price:99.99,
                    descrption: 'A collection of book must read All times classical included'
                }
            ]
        }
    },
    mutations: mutations,
    actions: actions,
    getters:getters
}
