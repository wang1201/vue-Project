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
    // console.log(localStorage.userInfo?1:2);
    let userInfo = localStorage.userInfo ? JSON.parse(localStorage.userInfo) : '';
    // console.log(userInfo ? console.log(userInfo.token):'22322')
    let token = userInfo ? userInfo.token : '';
    let results = await this.$http({
      url: "/my/ajax/movieOnInfoList?token=" + token
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

