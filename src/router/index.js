import {createRouter, createWebHistory} from "vue-router";
import Index from "../components/Index.vue";
import Calendar from "../components/Calendar.vue";

const routes = [
  {
    path: "/",
    component: Index
  },
  {
    path: "/calendar",
    component: Calendar
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router