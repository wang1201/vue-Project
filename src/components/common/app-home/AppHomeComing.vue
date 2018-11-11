<template>
     <div id="movie-list" >
       <div>
          <app-home-awaiting-box>

          </app-home-awaiting-box>
          <app-home-filem-box :allResource = "allComResults" >
          </app-home-filem-box>
       </div>
      
     </div>
    
</template>

<script>
//awaiting-ul
import AppHomeAwaitingBox from "@com/common/app-home/AppHomeAwaitingBox";

//coming--ul
import AppHomeFilemBox from "@com/common/app-home/AppHomeFilmBox";

export default {
  data() {
    return {
      allComResults:[],
    };
  },
  components: {
    AppHomeFilemBox,
    AppHomeAwaitingBox
  },
  async created() {
    let results = await this.$http({
      url: "/my/ajax/comingList"
    });
    //整体数据，用于做scroll的时候取出来movieIds拼接
    this.allComResults = results;

  },
};
</script>

<style lang="scss" >

</style>

