<template>
    <div class="app-movie-detail" v-if="dateAndCinema">
        <app-home-movie-detail-info :detailMovie = "detailMovie">

        </app-home-movie-detail-info>
        <div ref="tabWrapper" id="showDays" >
            <ul id="timeline" class="mb-line-b" > 
                <li 
                    class="showDay"
                    v-for="item in showDays"
                    :key="item.date"
                    @click="getCinemaAjax({date:item.date})"
                    :class="dateAndCinema.day == item.date ? 'chosen' :''" 
                >
                     {{item.date | changeTime(item.date)}}
                </li>
               
            </ul>
        </div>
         <div class="app-cinema">
            <app-ciname-list
                v-for="cinema in dateAndCinema.cinemas"
                :key="cinema.id" 
                :info="cinema"
            ></app-ciname-list>
        </div>
    </div>
</template>
<script>
import AppHomeMovieDetailInfo from "@com/common/app-home/app-home-movieDetail/AppHomeMovieDeatilInfo";
import AppCinameList from '@com/common/app-cinema/AppCinemaList'

import BScroll from "better-scroll";
export default {
  props: ["id"],
  data() {
    return {
      detailMovie: [],
      dateAndCinema:[],
      showDays:[],
    };
  },
  components: {
    AppHomeMovieDetailInfo,
    AppCinameList
  },
  async created() {
    //第一部分电影详情内容
    let result = await this.$http({
      url: "/my/ajax/detailmovie?movieId=" + this.id
    });
    this.detailMovie = result.detailMovie;
    this.getCinemaAjax();
    
    
  },
  mounted() {
    this.$nextTick(() => {
      this.scroll = new BScroll('#showDays', {
        click: true,
        scrollX: true
      });
    });
    
  },
  methods:{
      getDateMovie(){

      },
     async getCinemaAjax(options={}){
         console.log(options);
        //获得日期以及下面的数据
        let cityId = JSON.parse(localStorage.city).cityId  || this.$store.state.chunks.cityId  
        //当前时间
        let d = new Date();
        let time = d.getFullYear()+ '-'+parseInt(d.getMonth()+1) + '-'+d.getDate();
        let results = await this.$http({
        method: "post",
        url: "/my/ajax/movie?forceUpdate=",
        data: {
            movieId: this.id,
            day: options.date ? options.date : time,
            offset: "0",
            limit: "20",
            updateShowDay: true,
            cityId: cityId
        }
        });
        this.dateAndCinema = results;
        this.showDays = results.showDays.dates;
    }
  }
};
</script>

<style lang="scss">
.app-movie-detail {
  #showDays {
    width: 100%;
    background-color: #fff;
    #timeline {
      padding: 0;
      margin: 0;
      white-space: nowrap;
      width: fit-content;
      .showDay {
        display: inline-block;
        width: 3.066667rem;
        line-height: 1.146667rem;
        margin-left: 0.12rem;
        font-size: 0.373333rem;
        text-align: center;
        list-style: none;
        color: #666;
        &.chosen {
          border-bottom: 0.026667rem solid #f03d37;
          color: #f03d37;
        }
      }
    }
  }
}
</style>
