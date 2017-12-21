import vue from 'vue'
import vuerouter from 'vue-router'

import app from './app.vue'

import home from './home'
import about from './about'
import news from './news'
import contact from './contact'
import project from './project'
import publish from './publish'
import hr from './hr'
import newsdetail from './newsdetail'
import projectsdetail from './projectsdetail'
import publishdetail from './publishdetail'

vue.use(vuerouter);

const routes = [{
  path: '/',
  component: home
}, {
  path: '/home',
  component: home
}, {
  path: '/about',
  component: about
}, {
  path: '/news',
  component: news
}, {
  path: '/contact',
  component: contact
}, {
  path: '/projects',
  component: project
}, {
  path: '/publish',
  component: publish
}, {
  path: '/hr',
  component: hr
}, {
  path: '/news/:id',
  component: newsdetail
}, {
  path: '/projects/:id',
  component: projectsdetail
}, {
  path: '/publish/:id',
  component: publishdetail
},
];

const router = new vuerouter({
  routes
})


new vue({
  router,
  ...app
}).$mount('#app')

