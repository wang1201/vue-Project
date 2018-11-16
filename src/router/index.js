// 配置路由表routes
import vue from 'vue'; //引入package.json的vue插件
import VueRouter from 'vue-router'; //引入package.json的路由插件

vue.use(VueRouter); //全局挂载router，全局路由，保证每个都能用到

//一级路由
import appHome from '@pages/home/AppHome'
//二级路由
//正在热映
import appHomeHoting from '@com/common/app-home/AppHomeHoting'
//即将上映
import appHomeComing from '@com/common/app-home/AppHomeComing'
// 电影详情页
import appHomeMovieDetail from '@pages/home/AppHomeMovieDetail'
// 电影演员页
import appHomeMoviePage from '@pages/home/AppHomeMoviePage'

import appCinema from '@pages/cinema/AppCinema'
import AppCinemaDetails from '@pages/cinema/AppCinemaDetails'



import notFound from '@pages/not-found/NotFound'
import my from '@pages/my/AppMy'
import citis from '@pages/citis/AppCitis'



const routes = [{
    path: '/', //默认路径时 重定向
    redirect: '/home',
    // alias: '/home'
}, {
    path: '/home',
    name: 'home', //可以直接通过路由的path去访问  也可以通过配置的这个name
    component: appHome, //显示的组件
    redirect:'/home/hotShowing',
    children: [{//二级路由--正在热映
        path: 'hotShowing',
        name: 'hotShowing', 
        component: appHomeHoting, 
    },{//即将上映      
        path: 'comingSoon',
        name: 'comingSoon', 
        component: appHomeComing, 
    }]
},  {
    // props 被设置为 true，route.params 将会被设置为组件属性。也就是穿进来的那个id
    path: '/movieDetail/:id',
    name: 'movieDetail',
    component: appHomeMovieDetail,
    props: true
},{
    // props 被设置为 true，route.params 将会被设置为组件属性。也就是穿进来的那个id
    path: '/moviePage/:id',
    name: 'moviePage',
    component: appHomeMoviePage,
    props: true
},{
    path: '/cinema',
    name: 'cinema', 
    component: appCinema 
},{
    path: '/cinema-details/:id',
    name: 'cinema-details', 
    component: AppCinemaDetails,
    props: true
},{
   path: '/my',
    name: 'my',
    component: my
},{
    path: '/citis',
    name: 'citis',
    component: citis
}, {
    path: '/not-found',
    name: 'not-found',
    component: notFound
}, {
    path: '**', //其他的乱七八糟的写的后缀
    redirect: '/not-found', //显示的组件
}]


//路由工具
// 配置完成后，把router 实例注入到 vue 根实例中,就可以使用路由了，也就是main.js
// 最后创建router 对路由进行管理，它是由构造函数 new vueRouter() 创建，接受routes 参数。
const router = new VueRouter({
    mode: 'history', //h5 histpry 直接
    // mode:'hash',//hash 带#/home这种
    // base: '/app/',重命名
    routes // routes: routes 的简写,仅仅是把routes提溜出去了而已
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