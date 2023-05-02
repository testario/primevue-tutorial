import {createRouter, createWebHistory} from "vue-router";
import Index from "../components/Index.vue";
import Calendar from "../components/Calendar.vue";
import CascadeSelect from "../components/CascadeSelect.vue";

const routes = [
  {
    path: "/",
    component: Index
  },
  {
    path: "/calendar",
    component: Calendar
  },
  {
    path: "/cascade-select",
    component: CascadeSelect
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router