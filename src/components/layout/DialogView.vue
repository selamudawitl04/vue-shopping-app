<template>
    <transition name="dialog">
        <dialog open >
            <h1>{{ title }}</h1>
            <p>{{ message }}</p>
            <button @click="$store.commit(chooseAlert)">Close</button>
        </dialog>
    </transition>
    
</template>
<script>
export default{
    props:['type','title', 'message'],
    computed:{
        chooseAlert(){
            if(this.type == 'cart'){
                return 'changeCartAlert'
            }else{
                return 'changeProductAlert'
            }
        }
    }


}
</script>
<style>
dialog{
    background-color: white;
    position: fixed;
    top: 20vh;
    z-index: 100;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    border: none;
    text-align: center;
}
button{
    font: inherit;
    border-radius: 0.5rem;
    border: none;
    background-color: rebeccapurple;
    padding: 0.25rem 0.5rem;
    cursor: pointer;
}
.dialog-enter-from{
    opacity: 0;
    transform: translateY(-30px);
}
.dialog-enter-active{
    transition: all 0.5s ease-out;
}
.dialog-enter-to, .dialog-leave-from{
    opacity: 1;
    transform: translateY(0);
}

.dialog-leave-active{
    transition: all 0.5s ease-in;
}
.dialog-leave-to{
    opacity: 0;
    transform: translateY(-30px);

}
</style>