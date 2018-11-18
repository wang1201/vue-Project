// App.vue是我们的主组件，所有页面都是在App.vue下进行切换的。
//router-view根据路由的变化要动态切换显示的区域
<template>
  <div id="app">
      <vue-progress-bar></vue-progress-bar>
    <app-header></app-header>

    <main>
        <!-- keep-alive是Vue的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM。 -->
        <!-- include: 字符串或正则表达式。只有匹配的组件会被缓存。 -->
        <!-- exclude: 字符串或正则表达式。任何匹配的组件都不会被缓存 -->
        <!-- <keep-alive include=""> -->
            <router-view></router-view>
        <!-- </keep-alive> -->
     
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
  },
  created () {
      // 头部进度条  路由跳转时分为beforeEach  afterEach
      this.$router.beforeEach((to, from ,next) => {
        if ( to.name !== 'my'  ) {
          this.$Progress.start()
        }
        next()
      })
      this.$router.afterEach((to, from ,next) => {
         if ( to.name !== 'my' ) {
          this.$Progress.finish()
        }
      })
    },
//    created () {
//     this.$router.beforeEach((to, from, next) => {
//       this.$Progress.start()
//       next()
//     })
//     this.$router.afterEach((to, from) => {
//       this.$Progress.finish()
//     })
//   }
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
