import { createApp } from "vue"
import PrimeVue from "primevue/config"
import localeRu from "./locale/_ru.js"
import "./assets/_tailwind.css"
import "primevue/resources/primevue.min.css"
import "primeicons/primeicons.css"
import "primevue/resources/themes/lara-dark-teal/theme.css"
import "./assets/style.css"

import App from "./App.vue"
import router from "./router/index.js";

createApp(App).use(PrimeVue, {
  locale: localeRu
}).use(router).mount('#app')
