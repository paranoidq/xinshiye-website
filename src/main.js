import vue from 'vue'
import vuerouter from 'vue-router'

import app from './app.vue'

import home from './components/home'
import about from './components/about'
import news from './components/news'
import contact from './components/contact'
import project from './components/project'
import publish from './components/publish'
import hr from './components/hr'
import newsdetail from './components/newsdetail'
import projectsdetail from './components/projectsdetail'
import publishdetail from './components/publishdetail'

import DateFormatter from './utils/DateFormatter'

vue.config.productionTip = false

vue.use(vuerouter);

import store from './utils/store';
import types from './utils/types';


// 全局公共组件
vue.use(DateFormatter);
vue.prototype.types = types;


const routes = [{
  path: '',
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
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  store.commit(types.LOADING);
  next();
});


new vue({
  router,
  store,
  types,
  ...app
}).$mount('#app')

