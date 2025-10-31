import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/utils/vantui'

// 全部导入
// import Vant from 'vant'
// import 'vant/lib/index.css'
// // 把vant中所有的组件都导入了
// Vue.use(Vant)

// 按需导入(抽离到单独的js文件)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
