<template>
    <div class="app-movie-detail">
        <div class="movie-detail" data-bid="dp_wx_buy_movie" v-if="detailMovie">
            <div class="movie-filter"></div>
            <div class="poster-bg" style="background-image:url(//p0.meituan.net/71.100/movie/363e3a7e614d29b2847ff4e62afcd3f42168651.jpg)"></div>
            <div class="detail box-flex">
                <div class="poster">
                    <img src="//p0.meituan.net/148.208/movie/363e3a7e614d29b2847ff4e62afcd3f42168651.jpg">
                </div>
                <div class="content flex">
                    <div class="title middle line-ellipsis">毒液：致命守护者</div>
                    <div class="title-en-name line-ellipsis">Venom</div>
                    <div class="score line-ellipsis">9.4
                        <span class="snum">(45.0万人评)</span>
                    </div>
                    <div class="type line-ellipsis">
                        <span>动作,惊悚,科幻</span>
                        <div class="type-group">  
                            <img class="sd-imax" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAAAeCAYAAADTsBuJAAAD+0lEQVRoge2aPUwUQRSAPy4YiZh4DbT8VJhIvA4KkyOhBq+Uyi2gFlssPAtoPW01cWm0RaxVTCi0EkOhFXe0WoiJGhJJ1uK9cefW/ZnF3K3R/ZLNDDNvfnhv5s3bvRkIggBgGLgIjACDlPSSE+AT8B74NhAEwXngCnCm0Gn9f/wAdgeBKf5O5T8regI9Ygi4DIwCUxXE7ZT0j2PgneZHKpQ+vwiONR2sFDqNEkoDFExpgIJx9f+TwDJwySprA0+A11bZCjCR0EcbeAp8zDnHKDWgBfj6oH/XgC3Np9EAVoE9TaNUtR+AJrCTMP4R4GkaZUv7iWvfhcsOmAQ2EOW/QZT+BlH0GjBtyU6o3L71gIRcC8B9YN5hzDSqQB0Yt8pqWtZ0aN9S2VpCfUPr68QbaE+fq4QLINr/VcQwO1mTcdkBS8A54B7w3CpfRHbFIqGiDU9i8tPALeAGshsOHMbOywVkVfoJ9Q1gLKMPo/RXiCLHgU6MzJzW2+PNIf/foZZn4rIDZoDvdCsfQtcz7DIQYqR1zS86tsnLF9J3QdyKtqkhL0mbhK7MS5D1dLwWYiTbdTWId02/4WKAReBaTPmspnl8+r7Kz2YJnpIWssIbMXVziFvZTGlvDOQjykxbyeYMuaCyW5q/qXVO5I2C5hGXtIG4n4/A45x9tBGX1gt8TeNWuqdpM6FtFTHcIaHv9hGDerEtpH4T2TV1JMjICgK6OK0BTDS0Tf6ophe+39BBFFJHVrxhHLiO+PVOQtsGsoJtBfqaeiljbiXknchrgDXEJd1CIiFzCOdhMqd8XpqaelbZaqQurZ1vlXUQo0WjLkPVkrfPA2eyDDCMRC+jkfJ9wpWS1wATyKHeKzqI0q4THo4e8gFsJ6HNHGF09BkIrKeu5XFuzfj9O3SfB85khaGTSOTSRsIrm2+I+4kaJ415lX+Ro81paAIvEaUc8btrieJpeo/46GVVZVYjZXXE2E0tayChaYvsiAvINsA+slonkJ1gx/tGmW2XgVR+RfvLe3DnZYcwgjnSvJ8gW0V2yyHJSqsiC9DTfmrAXcTteJach0RAN3QOmbvB5UXsgXa4jvj9AySMNJ8cHsa0WbLyxoWNIspf488/R7jQBB4RuogkPE3TdkiL0AAm5DRtO5bcEbIL3iKGGifjfcDFAM8Rd7OMvJTNaHkbUX70LRi6DdBGFL5t9dUPfMQIVdKVa1Z92mrtIGdIXeXGkGgrrs0eYvDbOoe4d5JfDARBsJAmEMMw/VHiv/qTpGEBTvc5ul8r+L+g/D2gYEoDFExpgIKpIDe1SvrLWU1PKsg1uZL+MUT4a9yn8mpicfwAdgf0cu555IpieTm395jLuR+Arz8BrLjpSMoYSlEAAAAASUVORK5CYII=">
                        </div>
                    </div>
                    <div class="src line-ellipsis">美国/107分钟</div>
                    <div class="pubDesc line-ellipsis">2018-11-09大陆上映</div>
                </div>
            </div>
            <div class="arrow-g">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAWCAYAAAAfD8YZAAAAAXNSR0IArs4c6QAAAS5JREFUOBGVkktuwkAMhpOoJ+hhSouE2HbDgiVCNCAOVtQHnINHhbgMJ6g6/f9gR848kmDJeOzxZ3scskzEOfcKXUMLjXXZByYQhJlqMvz3PM//1E9Z7fJoEp5wXvWZoILRZQtg7xVYdhXQzuR2XoEB/NYCOSkVdKI/g441BnuBbmI7aMAE7ilgxyaboYOD4RMO9EWiTwhgJksBLtEvUNolRmGvwJG+yDNsXSB4s2aplR3M4Y80BnuGfiQ7m0Q2qP6JJvaLc/VpTKx5lPe9IfpibviMb+4lOXYXyGLRsRPgSTsSpASdW8Av+YQ3Er+NzgIuELdvZMcAZIUaBsgpCA55IZIEeV+NLSC32hskXCTAH9xFRyWkUsgSrhqAJfjpL8fch0dMMIGWMkmYEIn8Az5Wgp5LHlhmAAAAAElFTkSuQmCC">
            </div>
        </div>
        <div id="showDays" ref="tabWrapper">
            <ul id="timeline" class="mb-line-b"> 
                <li data-day="2018-11-15" class="showDay chosen">
                    今天11月15日
                </li>
                <li data-day="2018-11-16" class="showDay">
                    明天11月16日
                </li>
                <li data-day="2018-11-17" class="showDay">
                    后天11月17日
                </li>
                <li data-day="2018-11-18" class="showDay">
                    周日11月18日
                </li>
                <li data-day="2018-11-19" class="showDay">
                    周一11月19日
                </li>
                <li data-day="2018-11-20" class="showDay">
                    周二11月20日
                </li>
                <li data-day="2018-11-21" class="showDay">
                    周三11月21日
                </li>
                <li data-day="2018-11-22" class="showDay">
                    周四11月22日
                </li>
            </ul>
        </div>
        <!-- <app-ciname-list></app-ciname-list> -->
    </div>
</template>
<script>
// import AppCinameList from '"@com/common/app-cinema/AppCinemaList'

import BScroll from "better-scroll";
    export default {
        props:['id'],
        data(){
            return{
                detailMovie:[],
            }
        },
       async created(){
            // 横向scroll
            // scroll({
            // el: '#awaite-box_info',
            // data: this.itemList,
            // horizontal: true,
            // paging: results.paging,
            // url: '/my/ajax/mostExpected?ci='+ this.$store.state.chunks.city.cityId,
            // vm: this
            // })
            //  let results = await this.$http({
            //     url: "/my/ajax/mostExpected",
            //     params:{
            //         ci:this.$store.state.chunks.city.cityId
            //     }
            // });
            //第一部分电影详情内容
            let result =  await this.$http({
                url:"/my/ajax/detailmovie?movieId=" + this.id,
            });
            this.detailMovie = result.detailMovie;

            let results =  await this.$http({
                method:"post",
                url:"/my/ajax/movie",
                data:{
                    movieId: '42964',
                    day: '2018-11-15',
                    offset: '0',
                    limit: '20',
                    updateShowDay: true,
                    reqId: '1542255096095',
                    cityId: '20',
                }
            });
            console.log(results);
        },
        mounted(){
            this.$nextTick(() => {
            this.scroll =  new BScroll(this.$refs.tabWrapper, {
                click: true,
                scrollX: true
                });
            });
        }
    }
</script>

<style lang="scss">
.app-movie-detail {
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
        width: 2.933333rem;
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
