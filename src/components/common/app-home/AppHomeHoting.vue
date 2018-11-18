<template>
    <app-home-filem-box :allResource = "allHotResults" id="movie-list" >
    </app-home-filem-box> 
</template>

<script>
//ul
import AppHomeFilemBox from "@com/common/app-home/AppHomeFilmBox";

export default {
  data() {
    return {
      allHotResults:[]
    };
  },
  components: {
    AppHomeFilemBox,
  },
  async created() {
    let userInfo = JSON.parse(localStorage.userInfo);
    let results = await this.$http({
      url: "/my/ajax/movieOnInfoList?token="+userInfo.token
    });
    //整体数据，用于做scroll的时候取出来movieIds拼接
    this.allHotResults = results;
  },
  methods:{
      backTop (e) {
          this.$refs.list.backTop()
      }
  },
  
};
</script>

<style lang="scss" >
  #movie-list{
    height: -webkit-fill-available;
  }
</style>

