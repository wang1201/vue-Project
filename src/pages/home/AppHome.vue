<template>
    <div class="app-outerBox">
        <app-nav></app-nav>
        <section class="app-home">
              <app-home-filem-box
                v-for="item in film_types"
                :key="item.id"
                :filmType = "item"
              >
              </app-home-filem-box>     
        </section> 
        <app-fotter></app-fotter>  
    </div>
    
</template>

<script>
//NAV
import AppNav from "@com/layout/AppNav";
//底部
import AppFotter from "@com/layout/AppFotter";
//ul
import AppHomeFilemBox from "@com/common/app-home/AppHomeFilmBox";
//item
import AppHomeFilemItem from "@com/common/app-home/AppHomeFilmItem";

export default {
  data() {
    return {
      film_types: [
        { id: 1, url: "movieOnInfoList", title: "正在热映" }
        // { id: 2, url: "comingList", title: "即将上映" }
      ]
    };
  },
  components: {
    AppHomeFilemBox,
    AppHomeFilemItem,
    AppFotter,
    AppNav
  }
};
</script>

<style lang="scss" >
.app-home {
  flex-grow: 1;
  overflow: scroll;
}
</style>

