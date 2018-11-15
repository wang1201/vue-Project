// home的列表的外壳   
<template>
  <div class="app-home-film-box">
        <div v-if="$route.name=='comingSoon'" v-for="(value,key) of groupedMovies" :key="key" >
            <p class="movie-group-date">{{key}}</p>
            <app-home-film-item
                v-for = "film of value"
                :key  = "film.id"
                :info = "film"
            ></app-home-film-item>
        </div>
        <div v-else>
            <app-home-film-item
                v-for = "film in films"
                :key  = "film.id"
                :info = "film"
            ></app-home-film-item>
      </div>
  </div>
    
</template>
<script>
import AppHomeFilmItem from "@com/common/app-home/AppHomeFilmItem";
import { scroll } from "@util/scrolls";
import _ from "lodash";
// import BScroll from "better-scroll";

export default {
  components: {
    AppHomeFilmItem
  },
  props: ["allResource"], //返回的全部的信息
  data() {
    return {
      films: [] //电影列表信息
    };
  },
  computed: {
    //处理根据时间分组的问题
    groupedMovies() {
      return _.groupBy(this.films, item => {
        return item.comingTitle;
      });
    }
  },
  // mounted(){
  //    this.$nextTick(() => {
  //     this.scroll =  new BScroll(this.$refs.tabWrapper, {
  //         click: true,
  //         scrollY: true
  //       });
  //   });

  // },
  watch: {
    // 1、监听父组件二次传过来的新值
    // 2、下一步准备更新moives, 因此必须让movies可以重新赋值
    allResource() {
      this.films =
        (this.allResource &&
          (this.$route.name === "hotShowing"
            ? this.allResource.movieList
            : this.allResource.coming)) ||
        [];
      // 纵向scroll
      // 因为路由有动画，需要播放300毫秒，
      // 因此此处需要加定时器，在300毫秒后创建scroll对象
      console.log('12121',this.$store.state.chunks.city.cityId);
      setTimeout(() => {
        scroll({
            el: "#movie-list",
            data: this.films,
            horizontal: false,
            movieList: this.allResource,
            url: "/my/ajax/moreComingList?ci="+this.$store.state.chunks.city.cityId,
            vm: this
          });
      }, 300);
    }
  }
};
</script>
<style lang="scss">
.movie-group-date {
  padding: 0.32rem 0.4rem 0;
  margin: 0;
  font-size: 0.373333rem;
  color: #333;
}
</style>

