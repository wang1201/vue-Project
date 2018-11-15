<template>
    <section class="app-cinema-details-info">
        <div class="movie-info">
            <div class="movie-title line-ellipsis">
                <span class="title">{{info.nm}}</span>
                <!-- 已经上映的 -->
                <span class="grade" v-if="info.globalReleased&&info.sc!='0.0'">
                    <span>{{info.sc}}
                        <span class="small">分</span>
                    </span>
                </span>
                <!-- 还无评分的 -->
                <span class="grade" v-if="info.globalReleased&&info.sc=='0.0'">
                    <span>暂无评分</span>

                </span>
                <!-- 还未上映的 -->
                <span class="grade" v-if="!info.globalReleased">
                    <span>{{info.wish}}
                        <span class="small">人想看</span>
                    </span>

                </span>

            </div>
            <div class="movie-desc line-ellipsis">{{info.desc}}</div>
        </div>
     <app-cinema-details-date-show
      :info = "info"
     > </app-cinema-details-date-show>
    </section>
   
  
</template>
<script>

import AppCinemaDetailsDateShow from "@com/common/app-cinema/AppCinemaDetailsDateShow";
// import _ from "lodash";
export default {
    props: ["info"],
     components: {
       AppCinemaDetailsDateShow
    },

};
</script>

<style lang="scss" >
.movie-info {
    padding: 0.293333rem 0.4rem;
    text-align: center;
    border-bottom: 0.013333rem solid #ccc;
}
.movie-info .movie-title {
    height: 0.64rem;
    line-height: 0.64rem;
    font-size: 0.426667rem;
    color: #333;
    font-weight: 700;
}
.movie-info .movie-title .grade {
    margin-left: 0.08rem;
    color: #ffb400;
    font-size: 0.426667rem;
}
.movie-info .movie-title .grade .small {
    font-size: 0.266667rem;
}
.movie-info .movie-desc {
    margin-top: 0.053333rem;
    height: 0.36rem;
    line-height: 0.36rem;
    font-size: 0.346667rem;
    color: #999;
}
</style>