// main.js是我们的入口文件，主要作用是初始化vue实例并使用需要的插件。

import Vue from 'vue'
import App from './App.vue'
import router from './router'//引入路由配置
// import store from './store'
// 引入全局通用样式
import '@styles/main.scss'

// flexible 移动端适配
import '@libs/flexible'

// 引入各种插件： swiper...
import '@libs'

// Vue.config.devtools = false
Vue.config.productionTip = false //以阻止 vue 在启动时生成生产提示。控制台打印的

new Vue({
  router,//保证任何组件都可以用到
  // store,
  render: h => h(App)
}).$mount('#app')
