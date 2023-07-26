import { createRouter, createWebHistory } from "vue-router";

//Frontend Layout
import Frontend from "../layouts/Frontend.vue";

//Backend Layout
import Backend from "../layouts/Backend.vue";

//Frontend Routes
import Home from "../views/frontend/Home.vue";
import Login from "../views/frontend/Login.vue";
import Profile from "../views/frontend/Profile.vue";
import Register from "../views/frontend/register.vue";

//Backend Routes
import Dashboard from "../views/backend/Dashboard.vue";

const routes = [
  //Frontend Routes
  {
    path: "/",
    name: "Home",
    component: Frontend,
    children: [
      {
        path: "/",
        component: Home,
        name: "Home",
        meta: {
          title: "Home",
          // description: "Home"
        },
      },
      {
        path: "/Login",
        name: "Login",
        component: Login,
        meta: {
          title: "Login",
          // description: "Login"
        },
      },
      {
        path: "/Profile",
        name: "profile",
        component: Profile,
        meta: {
          title: "Profile",
          // description: "Profile"
        },
      },
      {
        path: "/Register",
        name: "register",
        component: Register,
        meta: {
          title: "สมัครสมาชิค",
          // description: "สมัครสมาชิก"
        },
      },
    ],
  },
  {
    //Backend Routes
    path: "/backend",
    name: "Backend",
    component: Backend,
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: { title: "Dashboard" },
      },
    ],
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
