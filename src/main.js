import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import axios from './assets/api'
import ElementUI from 'element-ui'
import store from './store/index'
// 公共样式
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/index.css'

// 公共插件
import 'jquery';
// 注意bootstrap4与bootstrap3有很大区别
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

Vue.use(ElementUI)
Vue.prototype.$http = axios;

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
    store
}).$mount('#app')
