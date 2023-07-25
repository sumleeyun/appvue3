import { createRouter,createWebHistory } from "vue-router"; 

//Frontend Layout
import Frontend from '../layouts/Frontend.vue'

//Home Page
import Home from '../views/frontend/Home.vue'
import Login from '../views/frontend/Login.vue'
import Profile from '../views/frontend/Profile.vue'


const routes = [
    {
path: '/',
name: 'Home',
component: Frontend,
children: [{ path: '/', component: Home, name: 'Home' }]

},{
    path: '/Login',
    name: 'Login',
    component: Login,
}
,{
    path: '/Profile',
    name: 'profile',
    component: Profile,
}

]
const router = createRouter({
    history: createWebHistory(),routes
})
export default router
