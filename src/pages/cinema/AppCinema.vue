<template>
    <div class="app-outerBox">
        <app-nav></app-nav>
        <section class="app-cinema">
                   影院
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
.app-cinema {
  flex-grow: 1;
  overflow: scroll;
}
</style>

