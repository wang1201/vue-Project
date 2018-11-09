<template>
     <div>
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
//ul
import AppHomeFilemBox from "@com/common/app-home/AppHomeFilmBox";
//item
import AppHomeFilemItem from "@com/common/app-home/AppHomeFilmItem";

export default {
  data() {
    return {
      film_types: [
        { id: 1, url: "movieOnInfoList", title: "正在热映",type:'hoting'}
        // { id: 2, url: "comingList", title: "即将上映" }
      ]
    };
  },
  components: {
    AppHomeFilemBox,
    AppHomeFilemItem,
  },
  methods:{
        backTop (e) {
            this.$refs.list.backTop()
        }
    },
};
</script>

<style lang="scss" >
</style>

