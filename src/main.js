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

//导入vue-resource
// import vueResource from 'vue-resource'
// Vue.use(vueResource);
//导入axios
import axios from 'axios'
axios.defaults.baseURL = 'http://litc.pro:9999/v1';
Vue.prototype.$http = axios
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  render: h => h(App)
})
