<template>
    
    <div class="app-movie-page movie-detail" v-if="html">
        <!-- <div class="movie-page-header">
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
        </div>
        <div class="movie-page_movieDetail">
            <a href="#" class="section-expander">
                <span >特惠购票</span>
            </a>
            <p class="synopsis">
                {{detailMovie.dra}}
            </p>
        </div> -->
    </div>
     
</template>
<script>
export default {
  data() {
    return {
      html: false,
      id:'',
      cityId:'',
    };
  },
  async created() {
      console.log(this.$route);
    this.id =  this.$route.params.id;
    this.cityId  =  this.$route.query.cityId;
    let results = await this.$http({
      url: "/my/movie/" + this.id+'?cityId='+ this.cityId
    });
    let meta = results.replace(/(<meta.*?>)/g, "");
    //ms0.meituan.net/canary/css/main-c9d3c856.css
    let link = meta.replace( /(href="\/\/ms0.meituan.net\/canary\/css\/main-0b8865d0.css")/g, "");
    let link2 = link.replace( /(href="\/\/ms0.meituan.net\/canary\/css\/main-c9d3c856.css")/g, "");
    this.html = link2.replace(/id="app"/, "");
    setTimeout(() => {
      document.querySelector(".app-movie-page").innerHTML = this.html;
    }, 0);
    
  },

};
</script>
<style lang="scss">
// @import './a';
.app-movie-page {
  height: 100%;
  width: 100%;
  font-size: 100px !important;
  .text-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .movie-page_movieDetail {
    background: #ffffff;
    border: 1px solid green;
    .section-expander {
      color: white;
      cursor: pointer;
      font-size: 0.426667rem;
      padding: 0.2rem;
      margin: 0.4rem;
      display: block;
      text-align: center;
      border-radius: 0.106667rem;
      background: #e54847;
      color: #fff;
      text-decoration: none;
    }
    .synopsis {
      padding: 0 0.2rem;
      text-align: justify;
      margin: 0 0.32rem;
    }
  }
  .navbar {
    display: none;
  }
  .movie-page {
    z-index: auto;
  }
  .movie {
    padding: 0.4rem;
  }
  .movie-container {
    display: flex;
    overflow: hidden;
    align-items: center;
    .movie-cover,
    .movie-cover img {
      width: 3.15rem;
      height: 4rem;
    }
    .movie-content {
      padding: 0;
      margin-left: 0.333333rem;
      width: 5.733333rem;
      height: auto;
      .movie-name {
        font-size: 0.45rem;
      }
      .movie-ename {
        font-size: 0.32rem;
        color: #fff;
        opacity: 0.8;
        height: 0.3rem;
      }
      .movie-score .rating {
        font-size: 0.47rem;
      }
      .rating img {
        width: 0.47rem;
        height: 0.47rem;
      }
      .movie-score .released-score .score-num {
        color: #fff;
        opacity: 0.7;
        font-size: 0.34rem;
        margin-top: 0.16rem;
        margin-bottom: 0.16rem;
      }
      .movie-category {
        font-size: 0.34rem;
        margin-bottom: 0.2rem;
      }
      .movie-tag {
        display: inline-block;
        font-size: 0;
        margin-left: 0.12rem;
      }
      .movie-tag .tag-d {
        display: inline-block;
        width: 0.6rem;
        vertical-align: bottom;
        background-color: rgba(255, 255, 255, 0.4);
        border-top-left-radius: 2px;
        border-bottom-left-radius: 2px;
      }
      .movie-tag .tag-d,
      .movie-tag .tag-d-only,
      .movie-tag .tag-imax {
        box-sizing: border-box;
        font-size: 0.32rem;
        height: 0.346667rem;
        color: #fff;
        line-height: 0.346667rem;
        text-align: center;
      }
      .movie-tag .tag-imax {
        display: inline-block;
        width: 1rem;
        border: 0.02rem solid rgba(255, 255, 255, 0.4);
        line-height: 0.346667rem;
        border-top-right-radius: 2px;
        border-bottom-right-radius: 2px;
      }
      .movie-content-row {
        font-size: 0.36rem;
        opacity: 0.7;
        margin-bottom: 0.15rem;
      }
    }
  }
  .movie-page section.section-seperate {
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    margin: 0.4rem 0;
  }
  .movie-page .section-expander {
    position: relative;
    margin-top: 0 !important;
    padding: 0.3rem 0.3rem 0 0.3rem;
  }
  .movie-page .section-expander .btn {
    margin: 0 0 0.4rem;
  }
  .btn-block {
    display: block;
    margin: 0.2rem;
    padding: 0.4rem;
  }
  .btn {
    color: white;
    cursor: pointer;
    font-size: 0.426667rem;
    padding: 0.26rem 0.48rem;
    display: block;
    text-align: center;
    border-radius: 4px;
    line-height: 1;
    background: #e54847;
    color: #fff;
    text-decoration: none;
  }
  .text-expander-content p {
    font-size: 0.4rem;
    margin: 0;
    line-height: 0.55rem;
  }
  .text-expander-expand-false .text-expander-content {
    max-height: 2rem;
  }
  .movie-page .movie-celebrities img {
    width: 2.2rem;
    height: 3rem;
    margin: 0.06rem;
  }
  .movie-page .movie-celebrities li:first-child span {
    width: 2rem;
  }
  .movie-page .movie-celebrities span {
    width: 2.4rem;
    display: block;
    font-size: 0.33rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
  }
  .movie-page .section-movie-celebrities .link-more {
    border-top: 1px solid #e5e5e5;
    padding: 0 0.6rem;
  }
  .movie-page section .link-more {
    display: block;
    line-height: 1rem;
  }
  .movie-page .section-movie-celebrities .link-more h4 {
    float: left;
    font-size: 0.367rem;
  }
  .movie-page section h3 {
    margin: 0;
    color: #666;
    font-size: 0.4rem;
    padding: 0.2rem 0.4rem;
    border-bottom: 1px solid #e5e5e5;
  }
  .movie-page .movie-stages {
    padding-left: 0.4rem;
    margin: 0;
    overflow-x: scroll;
    white-space: nowrap;
  }
  .movie-page .movie-stages .stage-img-container.video {
    width: auto;
    position: relative;
    margin: 0 0.1rem 0 0;
  }
  .movie-page .movie-stages .stage-img-container {
    list-style: none;
    display: inline-block;
    overflow: hidden;
    width: 2.7rem;
    height: 2rem;
    margin-left: 0.1rem;
  }
  .movie-page .movie-stages .stage-img-container.video img {
    width: 4rem;
    height: 2.5rem;
    margin-top: 0;
  }
  .app-movie-page .movie-page .movie-stages .stage-img-container {
    list-style: none;
    display: inline-block;
    overflow: hidden;
    width: 2.7rem;
    height: 2rem;
    margin-left: 0.2rem;
  }
  .movie-page .movie-stages .stage-img-container img {
    width: 2.7rem;
    height: 2rem;
    background-size: 0.8rem;
  }
  .movie-page section .link-more h4 {
    position: relative;
    color: #666;
    margin: 0;
    font-weight: lighter;
    font-size: 0.37rem;
  }
  .movie-page .link-group .link:first-child {
    width: 50%;
    display: table-cell;
    margin: 0 0.2rem 0 0.3rem;
  }
  .movie-page .storebill .deal-stages li {
    display: inline-block;
    overflow: hidden;
    width: 3.3rem;
    margin: 0 0.3rem 0.3rem 0;
    list-style: none;
  }
  .movie-page .storebill .deal-stages img {
    float: none;
    width: 3.3rem;
  }
  .movie-page .storebill .link-num {
    float: right;
    margin-right: 0.6rem;
}
  .movie-page .storebill .deal-stages .deal-info-list {
    width: 100%;
  }
  .movie-page .storebill .deal-stages .deal-info-list h3 {
    padding: 0.2rem 0;
    font-size: 0.42rem;
    border-bottom: 0;
    text-overflow: ellipsis;
    overflow: hidden;
    font-weight: 600;
  }
  .movie-page .storebill .deal-stages .deal-info-list strong {
    font-weight: normal;
    font-size: 0.4rem;
    color: #e54847;
  }
  .movie-page .storebill .deal-stages .deal-info-list strong i {
    font-style: normal;
    font-size: 0.32rem;
  }
  .movie-page .storebill .deal-stages .deal-info-list .retail-price {
    margin-left: 0.1rem;
    font-size: 0.3rem;
    color: #999;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .movie-page .movie-news {
    padding-bottom: 0.5rem;
  }
  .panel-title h2 {
    padding: 0;
    margin: 0;
    font-size: 0.4rem;
    color: #333;
    font-weight: normal;
  }
  .movie-page .movie-news img {
    float: left;
    width: 3rem;
    height: 2.2rem;
  }
  .movie-page .movie-news .news-wrapper {
    font-size: 0.4rem;
    display: table;
    padding-left: 0.34rem;
    height: 2.2rem;
  }
  .movie-box.hasLink {
    width: 100%;
  }
  .movie-box {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    float: left;
    width: 100%;
    padding: 0.4rem 0;
  }
  .movie-box .cell .num {
    height: 0.8rem;
    color: #e54847;
    font-size: 0.6rem;
    font-weight: lighter;
    font-family: "Helvetica";
    /* margin: .1rem 0 .08rem 0; */
  }
  .movie-box .cell .desc {
    color: #999;
    font-size: 0.36rem;
    margin: 0.08rem 0 0.1rem 0;
  }
  .movie-box .cell .null {
    color: #999;
    height: 0.8rem;
    font-size: 0.5rem;
    line-height: 0.8rem;
    vertical-align: middle;
  }
  .app-movie-page .movie-page section h3 {
    margin: 0;
    color: #666;
    font-size: 0.48rem;
    padding: 0 0.4rem;
    vertical-align: middle;
    border-bottom: 1px solid #e5e5e5;
  }
  .movie-page .section-movie-comment h3 {
    height: 1.1rem;
    line-height: 1.1rem;
  }
  .list-view-item {
    list-style: none;
    font-size: 0.45rem;
    padding: 0.3rem 0.5rem;
    background-color: white;
    border-bottom: solid #e5e5e5 1px;
  }
  .comment {
    padding: 0 0.05rem;
  }
  .comment .rating,
  .comment .timeago {
    font-size: 0.38rem;
    margin-right: 0.2rem;
  }
  .comment .rating img,
  .comment .timeago img {
    width: 0.4rem;
    height: 0.4rem;
    font-size: 0.4rem;
  }
  .comment section p.content {
    margin: 0;
    color: #333;
    font-size: 0.35rem;
    line-height: 1.5;
    text-align: justify;
    word-wrap: break-word;
    padding: 0 !important;
  }
  .comment footer {
    margin-top: 0.2rem;
    margin-bottom: 0.2rem;
    line-height: 0.8rem;
    vertical-align: middle;
  }
  .comment footer .img {
    float: left;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;
    display: inline-block;
  }
  .comment .nick {
    display: inline-block;
    max-width: 5rem;
    color: #999;
    font-size: 0.36rem;
    font-style: normal;
    margin-left: 0.2rem;
    vertical-align: inherit;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  .comment .tag {
    color: white;
    font-size: 0.28rem;
    margin-left: 0.14rem;
    border-radius: 2px;
    line-height: 0.4rem;
    background: #ff9900;
    padding: 0.05rem 0.08rem;
    vertical-align: middle;
  }
  .app-movie-page .movie-page section .link-more h4 {
    position: relative;
    color: #666;
    margin: 0;
    font-weight: lighter;
    font-size: 0.4rem;
  }
  .movie-relatedAttribute ul li {
    list-style: none;
    height: 1.6rem;
    overflow: hidden;
    padding: 0 0.4rem 0 1rem;
    border-bottom: solid 1px #e5e5e5;
  }
  .movie-relatedAttribute ul li a div.content {
    white-space: nowrap;
    padding: 0.25rem 0;
  }
  .movie-relatedAttribute ul li a div.content h4,
  .movie-relatedAttribute ul li a div.content p {
    // margin: 0.2rem;
    padding: 0;
    border: none;
    font-size: 0.36rem;
    font-weight: normal;
  }
  .movie-relatedAttribute ul li a div.content p {
    font-size: 0.28rem;
    text-overflow: ellipsis;
    -o-text-overflow: ellipsis;
    overflow: hidden;
    color: #666;
  }
  .footer-misc {
    text-align: center;
    font-size: 0.32rem;
  }
  .footer-misc .icp a {
    font-size: 0.29rem;
    color: #9e9e9e;
    text-decoration: none;
  }
  .filmMusics .layout-grail-left.extra-icon {
    left: -0.8rem;
    top: 0.6rem;
    height: 0.6rem;
    width: 0.6rem;

    background: url(http://p0.meituan.net/mmdb/361d897700cb79c2c0c0620171fed8ed1460.png.webp)
      no-repeat;
    background-size: 100% 100%;
  }
  .parentguidances .layout-grail-left.extra-icon {
    left: -0.8rem;
    top: 0.6rem;
    height: 0.6rem;
    width: 0.6rem;
    background: url(http://p1.meituan.net/mmdb/250a17bc199c0b942073bec5429d2f422175.png.webp)
      no-repeat;
    background-size: 100% 100%;
  }
  .text-expander-button {
    color: #aaa;
    text-align: center;
    height: 0.54rem;
  }
  .text-expander-button {
    position: relative;
  }
  .text-expander-button:after {
    content: "";
    width: 0.26rem;
    height: 0.26rem;
    border-left: 0.026667rem solid #666;
    border-bottom: 0.026667rem solid #666;
    transform: rotate(315deg);
    -webkit-transform: rotate(315deg);
    position: absolute;
    // right: 9px;
    bottom: 0.2rem;
  }
  .movie-page section .link-more h4,
  .movie-page .section-media h3 {
    width: 100%;
    position: relative;
  }
  .movie-page .section-media h3:after {
    content: "";
    width: 0.2rem;
    height: 0.2rem;
    border-left: 0.026667rem solid #666;
    border-bottom: 0.026667rem solid #666;
    transform: rotate(225deg);
    -webkit-transform: rotate(225deg);
    position: absolute;
    top: 0.49rem;
    right: 0.3rem;
  }
  .movie-page section .link-more h4:after {
    content: "";
    width: 0.2rem;
    height: 0.2rem;
    border-left: 0.026667rem solid #666;
    border-bottom: 0.026667rem solid #666;
    transform: rotate(225deg);
    -webkit-transform: rotate(225deg);
    position: absolute;
    top: 0.35rem;
    right: 0.1rem;
  }
  .movie-page .link-group .link-num {
    float: right;
    margin-right: 0.6rem;
  }
}
</style>
