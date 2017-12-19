import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Home from './Home'
import About from './About'
import News from './News'
import Contact from './Contact'
import Project from './Project'
import Publish from './Publish'
import Hr from './Hr'

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
},{
  path: '/about',
  component: About
},{
  path: '/news',
  component: News
},{
  path: '/contact',
  component: Contact
},{
  path: '/projects',
  component: Project
},{
  path: '/publish',
  component: Publish
},{
  path: '/hr',
  component: Hr
},

];

const router = new VueRouter( {
  routes
})


new Vue({
  router,
  ...App
}).$mount('#app')

