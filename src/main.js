import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueSplide from '@splidejs/vue-splide';
import vuetify from '@/plugins/vuetify' // path to vuetify export
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'


Vue.config.productionTip = false

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueSplide)
Vue.use(VueRouter)
Vue.use(VueAxios, axios);

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
