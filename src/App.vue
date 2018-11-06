// App.vue是我们的主组件，所有页面都是在App.vue下进行切换的。

<template>
  <div id="app">
    <app-header></app-header>
<!--     
    <main>
      <app-home></app-home>
    </main> -->
      <app-cinema></app-cinema>
  </div>
</template>


<script>
//头部公共的布局组件
import AppHeader from '@com/layout/AppHeader'
//主页
import AppHome from '@pages/home/AppHome'

import AppCinema from '@pages/home/APPcinema'

export default {
    //别名，有名字的组件有更友好的警告信息。组件在全局用 Vue.component() 注册时，全局 ID 自动作为组件的 name。
    name: 'app',
    components: {
      //等同于：AppHome:AppHome,上面可以写app-home也可以是AppHome，app-home更符合w3c规范
      AppHome,
      AppHeader,
      AppCinema
    }
}

</script>

<style lang="scss">  //lang相当于language指定是css scss 还是stylus
  main {
   
  }


</style>
