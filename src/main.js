
import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 挂载路由对象s
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
