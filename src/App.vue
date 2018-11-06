// App.vue是我们的主组件，所有页面都是在App.vue下进行切换的。
//router-view根据路由的变化要动态切换显示的区域
<template>
  <div id="app">
    <app-header></app-header>
    
    <main>
      <router-view></router-view>
    </main>
    <app-fotter></app-fotter>
  </div>
</template>


<script>
//头部公共的布局组件
import AppHeader from '@com/layout/AppHeader'
//主页
import AppHome from '@pages/home/AppHome'
//底部
import AppFotter from '@com/layout/AppFotter'

export default {
    //别名，有名字的组件有更友好的警告信息。组件在全局用 Vue.component() 注册时，全局 ID 自动作为组件的 name。
    name: 'app',
    components: {
      //等同于：AppHome:AppHome,上面可以写app-home也可以是AppHome，app-home更符合w3c规范
      AppHome,
      AppHeader,
      AppFotter
    }
}

</script>

<style lang="scss">//lang相当于language指定是css scss 还是stylus
  #app{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  main {
   flex-grow: 1;
  }


</style>
