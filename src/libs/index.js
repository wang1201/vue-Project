import Vue from 'vue'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

// axios
import ajax from '@util/axios'

// filters
import '@util/filters'

// bus
import bus from '@util/bus'

// vue-progressbar
import VueProgressBar from 'vue-progressbar';
//懒加载
import { Lazyload } from 'mint-ui';

// console.log(this.changeImg('128.180'));

const options = {
  color: '#bffaf3',
  failedColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'top',
  inverse: false
}
 
Vue.use(VueProgressBar, options)

// 将VueAwemeSwiper中的多个组件注册为全局组件
// Vue.use(VueAwesomeSwiper)
Vue.use(VueAwesomeSwiper)
Vue.use(Lazyload,{
    // filter:changeImg('128.180')
})

Vue.prototype.$http = ajax
Vue.prototype.$bus = bus
