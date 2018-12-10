import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueRouter from 'vue-router';
import {routes} from './routes';
import { store } from './store/store';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes
})



new Vue({
  render: h => h(App),
   router,
   store
}).$mount('#app')
