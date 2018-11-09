<template>
    <div class="app-outerBox">
        <app-nav></app-nav>
        <section class="app-home">
            <router-view></router-view>
        </section> 
        <app-fotter></app-fotter>  
    </div>
    
</template>

<script>
//NAV
import AppNav from "@com/layout/AppNav";
//底部
import AppFotter from "@com/layout/AppFotter";

export default {
  data() {
    return {
      
    };
  },
  components: {
    AppFotter,
    AppNav
  }
};
</script>

<style lang="scss" >
.app-home {
  flex-grow: 1;
  overflow: scroll;
  .line-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}
</style>

