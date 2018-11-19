import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import VueResource from 'vue-resource'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'


Vue.use(VueResource);

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
