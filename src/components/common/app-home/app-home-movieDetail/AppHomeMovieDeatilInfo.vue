<template>
    <router-link  tag='div' :to="{name:'moviePage',params:{id:this.detailMovie.id},query:{name:this.detailMovie.nm,cityId:this.$store.state.chunks.city.cityId}}"  class="movie-detail" data-bid="dp_wx_buy_movie" v-if="detailMovie">
            <div class="movie-filter"></div>
            <div class="poster-bg" style="background-image:url(//p0.meituan.net/71.100/movie/363e3a7e614d29b2847ff4e62afcd3f42168651.jpg)"></div>
            <div class="detail box-flex">
                <div class="poster" v-if="detailMovie.img">
                    <img :src="detailMovie.img | changeImg('148.208')">
                </div>
                <div class="content flex">
                    <div class="title middle line-ellipsis">{{detailMovie.nm}}</div>
                    <div class="title-en-name line-ellipsis">{{detailMovie.enm}}</div>
                    <div class="score line-ellipsis" v-if="detailMovie.sc">
                        {{detailMovie.sc}}
                        <span class="snum">({{detailMovie.snum > 10000 ? (detailMovie.snum/10000).toFixed(1)+'万' : detailMovie.snum}}人评)</span>
                    </div>
                    <div class="score line-ellipsis" v-else>
                        {{detailMovie.bingeWatch}}人想看
                    </div>
                    <div class="type line-ellipsis">
                        <span>{{detailMovie.cat}}</span>
                        <div class="type-group" v-if="detailMovie.version">  
                            <img class="sd-imax" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAeCAYAAADTsBuJAAAD+0lEQVRoge2aPUwUQRSAPy4YiZh4DbT8VJhIvA4KkyOhBq+Uyi2gFlssPAtoPW01cWm0RaxVTCi0EkOhFXe0WoiJGhJJ1uK9cefW/ZnF3K3R/ZLNDDNvfnhv5s3bvRkIggBgGLgIjACDlPSSE+AT8B74NhAEwXngCnCm0Gn9f/wAdgeBKf5O5T8regI9Ygi4DIwCUxXE7ZT0j2PgneZHKpQ+vwiONR2sFDqNEkoDFExpgIJx9f+TwDJwySprA0+A11bZCjCR0EcbeAp8zDnHKDWgBfj6oH/XgC3Np9EAVoE9TaNUtR+AJrCTMP4R4GkaZUv7iWvfhcsOmAQ2EOW/QZT+BlH0GjBtyU6o3L71gIRcC8B9YN5hzDSqQB0Yt8pqWtZ0aN9S2VpCfUPr68QbaE+fq4QLINr/VcQwO1mTcdkBS8A54B7w3CpfRHbFIqGiDU9i8tPALeAGshsOHMbOywVkVfoJ9Q1gLKMPo/RXiCLHgU6MzJzW2+PNIf/foZZn4rIDZoDvdCsfQtcz7DIQYqR1zS86tsnLF9J3QdyKtqkhL0mbhK7MS5D1dLwWYiTbdTWId02/4WKAReBaTPmspnl8+r7Kz2YJnpIWssIbMXVziFvZTGlvDOQjykxbyeYMuaCyW5q/qXVO5I2C5hGXtIG4n4/A45x9tBGX1gt8TeNWuqdpM6FtFTHcIaHv9hGDerEtpH4T2TV1JMjICgK6OK0BTDS0Tf6ophe+39BBFFJHVrxhHLiO+PVOQtsGsoJtBfqaeiljbiXknchrgDXEJd1CIiFzCOdhMqd8XpqaelbZaqQurZ1vlXUQo0WjLkPVkrfPA2eyDDCMRC+jkfJ9wpWS1wATyKHeKzqI0q4THo4e8gFsJ6HNHGF09BkIrKeu5XFuzfj9O3SfB85khaGTSOTSRsIrm2+I+4kaJ415lX+Ro81paAIvEaUc8btrieJpeo/46GVVZVYjZXXE2E0tayChaYvsiAvINsA+slonkJ1gx/tGmW2XgVR+RfvLe3DnZYcwgjnSvJ8gW0V2yyHJSqsiC9DTfmrAXcTteJach0RAN3QOmbvB5UXsgXa4jvj9AySMNJ8cHsa0WbLyxoWNIspf488/R7jQBB4RuogkPE3TdkiL0AAm5DRtO5bcEbIL3iKGGifjfcDFAM8Rd7OMvJTNaHkbUX70LRi6DdBGFL5t9dUPfMQIVdKVa1Z92mrtIGdIXeXGkGgrrs0eYvDbOoe4d5JfDARBsJAmEMMw/VHiv/qTpGEBTvc5ul8r+L+g/D2gYEoDFExpgIKpIDe1SvrLWU1PKsg1uZL+MUT4a9yn8mpicfwAdgf0cu555IpieTm395jLuR+Arz8BrLjpSMoYSlEAAAAASUVORK5CYII=">
                        </div>
                    </div>
                    <div class="src line-ellipsis">{{detailMovie.fra}}/{{detailMovie.dur}}分钟</div>
                    <div class="pubDesc line-ellipsis">{{detailMovie.pubDesc}}</div>
                </div>
            </div>
            <div class="arrow-g">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAWCAYAAAAfD8YZAAAAAXNSR0IArs4c6QAAAS5JREFUOBGVkktuwkAMhpOoJ+hhSouE2HbDgiVCNCAOVtQHnINHhbgMJ6g6/f9gR848kmDJeOzxZ3scskzEOfcKXUMLjXXZByYQhJlqMvz3PM//1E9Z7fJoEp5wXvWZoILRZQtg7xVYdhXQzuR2XoEB/NYCOSkVdKI/g441BnuBbmI7aMAE7ilgxyaboYOD4RMO9EWiTwhgJksBLtEvUNolRmGvwJG+yDNsXSB4s2aplR3M4Y80BnuGfiQ7m0Q2qP6JJvaLc/VpTKx5lPe9IfpibviMb+4lOXYXyGLRsRPgSTsSpASdW8Av+YQ3Er+NzgIuELdvZMcAZIUaBsgpCA55IZIEeV+NLSC32hskXCTAH9xFRyWkUsgSrhqAJfjpL8fch0dMMIGWMkmYEIn8Az5Wgp5LHlhmAAAAAElFTkSuQmCC">
            </div>
        </router-link>
</template>
<script>
    export default {
        props:['detailMovie'],
        created(){
          console.log(this.$store.state.chunks.city.cityId);
            // console.log(this.detailMovie);
        }
    }
</script>

<style lang="scss">
.movie-detail {
  height: 5.013333rem;
  position: relative;
  cursor: pointer;
  .box-flex {
    display: flex;
  }
  .line-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .movie-filter {
    position: absolute;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: #333;
  }
  .poster-bg {
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
    position: absolute;
    -webkit-filter: blur(1.2rem);
    filter: blur(1.2rem);
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.55;
  }
  .detail {
    padding: 0.506667rem 0.8rem 0.506667rem 0.4rem;
    .poster img {
      width: 3.15rem;
      height: 4rem;
      box-sizing: border-box;
    }
    .content {
      overflow-x: hidden;
      margin-left: 0.333333rem;
      line-height: 1;
      color: #fff;
      .title {
        font-size: 0.533333rem;
        margin-top: 0.053333rem;
        font-weight: 700;
        overflow: hidden;
      }
      .pubDesc,
      .snum,
      .src,
      .title-en-name,
      .type {
        margin-top: 0.266667rem;
        font-size: 0.32rem;
        color: #fff;
        opacity: 0.8;
      }
      .score {
        font-size: 0.48rem;
        font-weight: 700;
        color: #fc0;
        margin-top: 0.293333rem;
      }
      .type > span,
      .mew-desc img {
        vertical-align: top;
      }
      .type {
        .type-group {
          display: inline-block;
          width: 1.12rem;
          opacity: 0.85;
          img {
            width: 1.12rem;
          }
        }
      }
    }
  }
  .arrow-g {
    position: absolute;
    width: 0.266667rem;
    right: 0.4rem;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
  }
}
</style>

