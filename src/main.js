import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Home from './Home'
import Buss from './Buss'
import About from './About'
import News from './News'

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

Vue.use(VueRouter);

const routes = [{
  path: '/',
  component: Home
},{
  path: '/home',
  component: Home
}, {
  path: '/buss',
  component: Buss
},{
  path: '/about',
  component: About
},{
  path: '/news',
  component: News
},

];

const router = new VueRouter( {
  routes
})


new Vue({
  router,
  ...App
}).$mount('#app')

