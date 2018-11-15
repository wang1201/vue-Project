// {{}}mustache  /mə'stɑːʃ/ 
<template>
    <header class="app-header">     
        <div class="page-title">
            <a v-if="!(this.$route.name == 'hotShowing' || this.$route.name == 'comingSoon'|| this.$route.name == 'cinema'|| this.$route.name == 'my')" 
                class="back" href="#" onclick="javascript: window.history.back();return false;">
               <i class="fa fa-angle-left"></i> 
            </a>
            <h1>{{title}}</h1>
        </div> 
    </header>
</template>

<script>
export default {
    data () {
        return {
            isNavShow: false,
            title: '猫眼电影'
        }
    },
   created () {
       //全局路由实例 $router对象，是router构造方法的实例，main.js中new VueRouter出来的
       //$route当前的激活的路由的状态信息，通常用于：
       //1.组件内：this.$route 2.$route观察者回调内router.match(location)的返回值
       //3.路由守卫/导航守卫的参数 router.beforeEach((to, from, next) => {// to 和 from 都是 路由信息对象})
       //watch: {$route(to, from) {// to 和 from 都是 路由信息对象}}
       //路由跳转的时候，做一些权限判断或者是其他的操作，于是就需要使用路由的钩子函数
       //Vue.beforeEach(function(to,from,next){})在跳转之前执行
       //Vue.afterEach(function(to,from){})在跳转之后判断
       //to:router即将进入的路由对象
       //from：当前导航即将离开的路由
       //next:Function进行管道中的一个钩子，执行完状态为confirmed，否则为false
       //afterEach函数不用传next()函数
        // 全局路由钩子
        this.title = this.titleInit();
        this.$router.beforeEach((to,from,next)=>{
           this.title = this.titleInit(to)
            next();
        })
    },
    methods: {
        titleInit (to) {
            let _to = to || this.$route;
            console.log(_to);
            switch ( _to.name ) {
                case 'cinema': return '影院';
                case 'movieDetail': return _to.query.name;
                case 'cinema-details': return _to.query.name;
                case 'my': return '我的';
                default: return '猫眼电影';
            }
        }
    },
    components: {

    }
}
</script>

<style lang="scss">
// sass语法，不是webpack的东西，所以不能使用alias
@import '../../stylesheets/particles/variable';
.app-header{
    background: $base-bg-color;
    height: 1.466667rem;
    line-height:1.466667rem;
    text-align: center;
    // flex: 0 0;
    .page-title{
        .back{
            position: absolute;
            font-size: .8rem;
            color: #ffffff;
            left: .4rem;
        }
        h1{
            color: #ffffff;
            font-size: .48rem;
             line-height:1.466667rem;
        }
    }
    
}
</style>

