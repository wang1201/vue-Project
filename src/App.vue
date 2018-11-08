// App.vue是我们的主组件，所有页面都是在App.vue下进行切换的。
//router-view根据路由的变化要动态切换显示的区域
<template>
  <div id="app">
    <app-header></app-header>

    <main>
      <router-view></router-view>
    </main>

  </div>

</template>


<script>
//头部公共的布局组件
import AppHeader from "@com/layout/AppHeader";

export default {
    //别名，有名字的组件有更友好的警告信息。组件在全局用 Vue.component() 注册时，全局 ID 自动作为组件的 name。
    name: "app",
    components: {
        AppHeader
    }
};
</script>

<style lang="scss">
//lang相当于language指定是css scss 还是stylus
#app {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
main {
    flex: 1 1;
    overflow: scroll;
}
</style>
