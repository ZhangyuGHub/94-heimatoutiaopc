import Vue from 'vue'
import App from './App.vue'
import router from './router'// 引入路由模块
import '@/permission/index.js' // 引入权限模块
import ElementUI from 'element-ui'
import axios from 'axios'// 引入axios
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/index.less'
Vue.config.productionTip = false
axios.defaults.baseURL = 'http://ttapi.research.itcast.cn/mp/v1_0' // 配置公共请求头地址
Vue.prototype.$axios = axios// axios赋给vue原型属性
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
