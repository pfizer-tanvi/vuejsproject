import { createWebHistory, createRouter } from "vue-router";
import Home from '../views/main-home.vue';

import Leaverequest from '../views/main-leaverequest.vue';
import Report from '../views/main-report.vue';
import Configuration from '../views/main-configuration.vue';
import Userguide from '../views/main-userguide.vue';



const routes = [
   {
        path: "/",
        name: "Home",
        component: Home
    },
    {
      path: "/main-leaverequest",
      name: "leaverequest",
      component: Leaverequest
    },
    {
      path: "/main-report",
      name: "report",
      component: Report
    },
    {
      path: "/main-configuration",
      name: "configuration",
      component: Configuration
    },
    {
      path: "/main-userguide",
      name: "userguide",
      component: Userguide
    }
]
const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: "active",
  linkExactActiveClass: "exact-active",
  routes
});

export default router;