// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

//导入vant组件
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);
//导入样式清除默认样式
import './lib/style/comm.css'

//导入axios
import axios from 'axios'
axios.defaults.baseURL = 'http://www.litc.pro:9999/v1';
//请求拦截
axios.interceptors.request.use(config => {
  if(localStorage.getItem('token')){
    config.headers.common['Authorization'] = JSON.parse(localStorage.getItem('token')) || '';
  }
  return config;
})
//回复拦截
axios.interceptors.response.use(response => {
  return response.data
})
Vue.prototype.$http = axios

//导入vue-scroller
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

//注册底部导航组件
import bottomCom from './components/bottomComponents'
Vue.component('bottomCom', bottomCom)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App)
})
