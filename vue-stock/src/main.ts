import { createApp } from 'vue'

// Custom CSS
import './styles/custom.css'

// Bootstrap 5
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

//validator
// import useVuelidate from '@vuelidate/core'
// import { required, email, minLength } from '@vuelidate/validators'
//vue Sweetalert2
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';


import App from './App.vue'
import router from './router'


createApp(App).use(router).use(VueSweetalert2).mount('#app')
