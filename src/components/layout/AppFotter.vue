// common footer

<template>
    <div class="app-fotter">
        <div class="app-fotter_info before-border">
             <router-link active-class="active"  to="/home" class="app-fotter_item" >
               <span class="app-fotter_itemIcon iconfont icon-dianying1"></span>
                <span class="app-fotter_itemName">电影</span>
             </router-link>
            <router-link to="/cinema" class="app-fotter_item">
                <span class="app-fotter_itemIcon iconfont icon-yingyuana"></span>
                <span class="app-fotter_itemName">影院</span>
            </router-link>
            <router-link to="/my" class="app-fotter_item">
                <span class="app-fotter_itemIcon iconfont icon-wode"></span>
                <span class="app-fotter_itemName">我的</span>
            </router-link>
        </div>    
    </div>
</template>


<script>
export default {};
</script>


<style lang="scss">
.app-fotter {
  position: relative;
  height: 1.293333rem;
  .app-fotter_info {
    display: flex;
    align-items: center;
    .app-fotter_item {
      display: flex;
      flex-direction: column;
      align-content: center;
      width: 3.333333rem;
      text-align: center;
      flex-shrink: 1;
      color: #696969;
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
