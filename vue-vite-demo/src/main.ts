import { createApp } from 'vue'
import router from './router'
// import './style.css'
import App from './App.vue'
// bootstrap 5
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

//Boostrap Icons
import 'bootstrap-icons/font/bootstrap-icons.css'

createApp(App).use(router).mount('#app')
