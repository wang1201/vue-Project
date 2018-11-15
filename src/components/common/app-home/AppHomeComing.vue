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
      url: "/my/ajax/comingList",
      params:{
        ci:this.$store.state.chunks.city.cityId
      }
    });
    //整体数据，用于做scroll的时候取出来movieIds拼接
    this.allComResults = results;
  },
  // watch: {
  //   '$store.state.chunks.city': {
  //       immediate: true,//一进页面的时候就监听
  //       handler (val) {
  //         console.log(val.cityId,'我是id');
  //           if ( !val.cityId ) return false
  //           this.$http({
  //               url: '/my/ajax/comingList?ci=' +''+ val.cityId,
  //           }).then(results => {
  //               this.allComResults = results;
  //           })
  //       }
  //   }
  // },
};
</script>

<style lang="scss" >

</style>

