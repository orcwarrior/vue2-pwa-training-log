import Vue from 'vue'
import AppComponent from './App.vue'

import VueRouter from 'vue-router'
import RouterMap from './router/map'

// Setup vue-router:
Vue.use(VueRouter)
const router = new VueRouter({ routes: RouterMap })

const app = new Vue({
  router, /* router: router */
  render: createElement => createElement(AppComponent) /* function(createElement) { return createElement(AppComponent) } */
}).$mount('#app')
