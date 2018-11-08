// common footer

<template>
    <div class="app-fotter">
        <div class="app-fotter_info before-border">
             <!-- <router-link active-class="active" @click.native = "$emit('update:show', false)" tag = "li" :to = "item.path" class="nav-item" 
                        v-for = "item in navs"
                        :key  = "item.id"
                    >
                        <a>
                            <span>{{ item.title }}</span>
                            <i class="fa fa-angle-right"></i>
                        </a>
                        
                    </router-link> -->
            <router-link
                v-for="item in navs"
                :key="item.id"
                :to="{name:item.name}"
                class="app-fotter_item" 
            >
                <span :class="item.icon" class="app-fotter_itemIcon iconfont"></span>
                <span class="app-fotter_itemName">{{item.title}}</span>
            </router-link>
        </div>    
    </div>
</template>


<script>
export default {
  data() {
    return {
      navs: [
        { id: 1, title: "电影", icon: " icon-dianying1", name: "home" },
        { id: 2, title: "影院", icon: " icon-yingyuana", name: "cinema" },
        { id: 3, title: "我的", icon: " icon-wode", name: "my" }
      ]
    };
  }
};
</script>


<style lang="scss">
.app-fotter {
  position: relative;
  height: 1.293333rem;
  flex: 0 0;
  .app-fotter_info {
    display: flex;
    align-items: center;
    .router-link-exact-active span,
    .router-link-active span{
      color: #f03d37;
    }
    .app-fotter_item {
      display: flex;
      flex-direction: column;
      align-content: center;
      width: 3.333333rem;
      text-align: center;
      flex-shrink: 1;
      color: #696969;
      cursor: pointer;
      .app-fotter_itemIcon {
        margin-top: 0.133333rem;
        font-size: 0.666667rem;
        line-height: 0.64rem;
      }
      .app-fotter_itemName {
        font-size: 0.32rem;
      }
    }
  }
}
</style>
