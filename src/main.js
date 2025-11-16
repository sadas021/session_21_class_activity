import './assets/main.css'

import { createApp } from 'vue'
import { VueFire, VueFireAuth } from 'vuefire'
import { app as firebaseApp } from './firebase_conf.js'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(VueFire, {
  firebaseApp,
  modules: [
    VueFireAuth(),
  ],
})

app.use(router)

app.mount('#app')
