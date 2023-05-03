import {createRouter, createWebHistory} from "vue-router";
import Index from "../components/Index.vue";
import Calendar from "../components/Calendar.vue";
import CascadeSelect from "../components/CascadeSelect.vue";
import Checkbox from "../components/Checkbox.vue";
import Chips from "../components/Chips.vue";

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
  },
  {
    path: "/checkbox",
    component: Checkbox
  },
  {
    path: "/chips",
    component: Chips
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router