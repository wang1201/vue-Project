<template>
     <div>
       <app-home-awaiting-box>

       </app-home-awaiting-box>
        <app-home-filem-box
            v-for="item in film_types"
            :key="item.id"
            :url = "item.url"
            :type = "item.type"
            >
        </app-home-filem-box>
     </div>
    
</template>

<script>
//awaiting-ul
import AppHomeAwaitingBox from "@com/common/app-home/AppHomeAwaitingBox";

//coming--ul
import AppHomeFilemBox from "@com/common/app-home/AppHomeFilmBox";
//coming-item
import AppHomeFilemItem from "@com/common/app-home/AppHomeFilmItem";


export default {
  data() {
    return {
      film_types: [
        // { id: 1, url: "movieOnInfoList", title: "正在热映" }
        { id: 2, url: "comingList?ci=57", title: "即将上映",type:'coming' }
      ]
    };
  },
  components: {
    AppHomeFilemBox,
    AppHomeFilemItem,
    AppHomeAwaitingBox
  }
};
</script>

<style lang="scss" >
</style>

