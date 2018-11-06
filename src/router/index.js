// 配置路由表routes
import vue from 'vue'; //引入package.json的vue插件
import VueRouter from 'vue-router'; //引入package.json的路由插件

vue.use(VueRouter);

import appHome from '@pages/home/AppHome'
import appCinema from '@pages/cinema/AppCinema'
import notFound from '@pages/not-found/NotFound'
import my from '@pages/my/AppMy'

const routes = [{
    path: '/', //默认路径时 重定向
    redirect: '/home',
    // alias: '/home'
}, {
    path: '/home',
    name: 'home', //可以直接通过路由的path去访问  也可以通过配置的这个name
    component: appHome //显示的组件
}, {
    path: '/cinema',
    name: 'cinema', 
    component: appCinema 
}, {
    path: '/my',
    name: 'my', 
    component: my
}, {
    path: '/not-found',
    name: 'not-found',
    component: notFound 
}, {
    path: '**',//其他的乱七八糟的写的后缀
    redirect: '/not-found', //显示的组件
}]


//路由工具
// 配置完成后，把router 实例注入到 vue 根实例中,就可以使用路由了，也就是main.js
// 最后创建router 对路由进行管理，它是由构造函数 new vueRouter() 创建，接受routes 参数。
const router = new VueRouter({ 
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