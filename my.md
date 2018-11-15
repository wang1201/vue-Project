# mz-project

卖座网的的移动端项目，有最新的电影咨询...

### VUE-CLI 3.0

使用了vue-cli 3.0 构建了卖座网开发环境，cli3 是18年年初开始着手创建的，结合了webpack4.0版本


##### 使用方式：

1. 安装cli  npm i @vue/cli -g

2. 初始化项目 vue create my-project || vue ui -> 开启可视化界面,选择第二个

3. 选择配置: 空格选中 

    babel -> js的编译。。。。
    linter -> 代码规范
    PWA -> 离线缓存等...
    Router -> vue-router 实现spa
    Vuex   -> 状态管理工具
    CSS pre.... -> css预处理 sass/less/stylus
    test  -> 做单元测试...
    y->选择css格式
####main.js是默认的入口文件，main.js里面引入了App.vue


##### cli3的项目结构配置：

package.json 中 scripts中利用vue-cli-service工具配置了开发模式

postcss.config.js postcss的配置文件

babel.config.js  babel的配置文件

public 是公共静态目录 可以直接使用/来访问

src  开发目录

##### vue.config.js

cli3 将自己配置文件隐藏了起来，全部封装在了vue-cli-service工具中

如果想要自定义一些配置的话，就可以在根目录中创建[vue.config.js](https://cli.vuejs.org/zh/config/#vue-config-js)，将需要的配置放进去，就能将默认的配置覆盖


在这里我们可以利用chainWebpack进行webpack中多个选项的配置，例如，resolve.alias（控制模块引入的别名）

config.resolve.alias.set(symbol, path)

##### src 配置指南

默认情况下:

assets 这里的资源可以利用相对地址去引入

components 存放组件的目录

views 存放路由组件

router.js vue-router的配置

store.js  vuex的配置

main.js 项目入口文件 使用render函数去渲染根组件

App.vue 根组件  任何一个项目， 都需要一个根实例，根实例里需要一个根组件


###### 单文件组件

用一个文件来代表一个组件，后缀名为.vue, 文件中分为 

* template (模板) 

* script 中暴露出组件的配置

* style 编写css样式

    lang 指定使用的预处理语言

    scoped 锁定css作用域，只在当前组件生效， 做法： 1. 为当前组件模板都添加上独一无二的自定义属性：data-v-216tedus 2. 将style中的css样式都添加上属性选择器的限制




配置路由， 新建router-index.js    main.js引入该文件，并注册到组件里
// 配置完成后，把router 实例注入到 vue 根实例中,就可以使用路由了，也就是main.js
// 配置路由表routes
import vue from 'vue'; //引入package.json的vue插件
import VueRouter from 'vue-router'; //引入package.json的路由插件

vue.use(VueRouter);

import appHome from '@pages/home/AppHome'
import notFound from '@pages/not-found/NotFound'

let routes = [{
    path: '/', //默认路径时 重定向
    redirect: '/home',
    // alias: '/home'
}, {
    path: '/home',//路径
    name: 'home', //可以直接通过路由的path去访问  也可以通过配置的这个name
    component: appHome //显示的组件
}{
    path: '/not-found',
    name: 'not-found',
    component: notFound 
}, {
    path: '**',//其他的乱七八糟的写的后缀
    redirect: '/not-found', //显示的组件
}]


//路由工具
// 配置完成后，把router 实例注入到 vue 根实例中,就可以使用路由了，也就是main.js
最后创建router 对路由进行管理，它是由构造函数 new vueRouter() 创建，接受routes 参数。
let router = new VueRouter({ 
    mode: 'history',//h5 histpry 直接
    // mode:'hash',//hash 带#/home这种
    // base: '/app/',重命名
    routes   // routes: routes 的简写,仅仅是把routes提溜出去了而已
    // routes: [{
    //         path: '/foo',
    //         component: Foo
    //     },
    //     {
    //         path: '/bar',
    //         component: Bar
    //     }
    // ]
})
export default router

####配置完成后，把router 实例注入到 vue 根实例中,就可以使用路由了
const app = new Vue({
  router
}).$mount('#app')

####router-link 标签渲染成了 a 标签，to 属性变成了a 标签的 href 属性，这时就明白了点击跳转的意思。router-view 标签渲染成了我们定义的组件，其实它就是一个占位符，它在什么地方，匹配路径的组件就在什么地方，所以 router-link 和router-view 标签一一对应，成对出现

#### <router-link to="/cinema">点击跳转</router-link>to为切换的路由router-link 处于选中状态时，vueRouter 会自动添加这个类

### <router-view></router-view>//根据路由的变化要动态切换显示的区域





接口：代理服务器 vue.config.js:
    devServer: {
      port: 8000,
      proxy:{
        '/my':{
          target:' http://m.maoyan.com/',
          changeOrigin:true,
          pathRewrite:{
            '^/my':'',
          }
        }
      }
    },
安装axios  -S
vue2.0之后  尤玉溪就使用了axios代替原生jquery ajax


想用axios的话 就需要在vue的原型上创建

####封装一个,用于做成功还是失败的返回，这样就不用每次判断了
####util->axios.js
import axios from 'axios'
//封装一个axios的ajax的请求
//vue2.0之后就推荐使用axios了,抛弃了jquery ajax
const ajax = (options)=>{
    let _react = options.react = undefined ? true : options.react;
    return axios(options)
    .then(res=>{
        if(res){
            if (_react) console.log('数据获取成功')
        }else{
            if (_react) console.log('数据获取失败')
        }
    }).catch((error)=>{
        console.log(error);
        return false
        
    })
}
export default ajax

###   main.js里引入了 import '@libs'//相当于libs/index.js

#####libs/index.js

import Vue from 'vue'
// axios
import ajax from '@util/axios'
//bus
import bus from '@util/bus'
vue.prototype.$http = ajax;
vue.prototype.$bus = bus;



#####bus用于做emit on  eventEmitter事件监听



####//全局路由实例 $router对象，是router构造方法的实例，main.js中new VueRouter出来的
//$route当前的激活的路由的状态信息，通常用于：
//1.组件内：this.$route 2.$route观察者回调内router.match(location)的返回值
//3.路由守卫/导航守卫的参数 router.beforeEach((to, from, next) => {// to 和 from 都是 路由信息对象})
//watch: {$route(to, from) {// to 和 from 都是 路由信息对象}}

###//路由跳转的时候，做一些权限判断或者是其他的操作，于是就需要使用路由的钩子函数
###全局路由
//Vue.beforeEach(function(to,from,next){})在跳转之前执行
//Vue.afterEach(function(to,from){})在跳转之后判断
//to:router即将进入的路由对象
//from：当前导航即将离开的路由
//next:Function进行管道中的一个钩子，执行完状态为confirmed，否则为false
//afterEach函数不用传next()函数
###单个路由