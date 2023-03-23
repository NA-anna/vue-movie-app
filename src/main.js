import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
// import './plugins/vue-masonry'
import { VueMasonryPlugin } from 'vue-masonry'
import store from './store'

loadFonts()

createApp(App)
  .use(store)
  .use(vuetify)
  .use(VueMasonryPlugin)
  .mount('#app')
