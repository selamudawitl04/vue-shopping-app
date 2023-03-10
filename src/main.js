 /* eslint-disable */
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueCookies from 'vue-cookies';
import BaseCard from './components/UI/BaseCard.vue'
import SectionHeader from './components/layout/SectionHeader.vue'
import MyButton from './components/UI/MyButton.vue'
import TheHeader from './components/layout/TheHeader.vue'
import store from './store/index.js'


const app = createApp(App);
app.use(VueCookies);
app.use(store)
app.use(router)
router.isReady().then(()=>{
    app.mount('#app')
})
app.component('base-card', BaseCard)
app.component('the-header', TheHeader)
app.component('section-header', SectionHeader)
app.component('my-button', MyButton)

