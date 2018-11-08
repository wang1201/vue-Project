<template>
     <div>
        <app-home-filem-box
            v-for="item in film_types"
            :key="item.id"
            :filmType = "item"
            >
        </app-home-filem-box>
     </div>
    
</template>

<script>
//ul
import AppHomeFilemBox from "@com/common/app-home/AppHomeFilmBox";
//item
import AppHomeFilemItem from "@com/common/app-home/AppHomeFilmItem";

export default {
  data() {
    return {
      film_types: [
        // { id: 1, url: "movieOnInfoList", title: "正在热映" }
        { id: 2, url: "comingList?ci=57", title: "即将上映" }
      ]
    };
  },
  components: {
    AppHomeFilemBox,
    AppHomeFilemItem,
  }
};
</script>

<style lang="scss" >
</style>

