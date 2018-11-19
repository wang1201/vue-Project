<template>
  <div class="app-outerBox">
    <section class="app-cinema" v-if="userInfo">
      <div class="my-center">
        <div class="header ">
          <img v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" class="head-icon">
          <img v-else src="https://img.meituan.net/maoyanuser/107702336ac18d9b9313e9b003020c5914743.png" class="head-icon">
          <div class="name">{{userInfo.name}}</div>
        </div>
        <div class="container">
          <div class="group">
            <div class="mb-outline-tb">
              <div class="orders">
                <div class="title">我的订单</div>
                <div class="mb-outline-b title-line"></div>
                <div class="list list-two">
                  <!-- TODO 演出开发完毕后，改成下面注释内容 -->
                  <!-- <div class="list list list-three"> -->
                  <div @click="getMovieDetail" class="order-item movie">
                    <a  data-type="mip">
                      <p>电影</p>
                    </a>
                  </div>
                  <!-- TODO 演出开发完毕后，改成下面注释内容 -->
                  <!--  <div class="order-item show"><a data-link="https://m.maoyan.com/myshow/fe/movieshoworder/order-list.html?fromTag=ordercenter"><p>演出</p></a></div>-->
                  <div @click="getStoreDetail" class="order-item store"><a>
                      <p>商城</p>
                    </a></div>
                </div>
              </div>
            </div>
          </div>
          <div class="group">
            <div class="mb-outline-tb">
              <div class="coupon item mb-line-b"><a><span>在线观影</span></a></div>
              <div class="coupon item mb-line-b"><a><span>优惠券</span></a></div>
              <div class="membercard item mb-line-b"><a><span>折扣卡</span></a></div>
            </div>
          </div>
          <button class="exit" @click="exit">退出登录</button>
        </div>
      </div>

    </section>

    <app-fotter></app-fotter>
  </div>

</template>

<script>
//底部
import AppFotter from "@com/layout/AppFotter";
export default {
  data() {
    return {
      userInfo: []
    };
  },
  created() {
     let userInfo = localStorage.userInfo ? JSON.parse(localStorage.userInfo) : '';
  },
  beforeRouterEnter() {
    this.$Progress.start();
  },
  mounted() {
    this.$Progress.finish();
  },
  components: {
    AppFotter
  },
  methods: {
    exit() {
      // 退出的时候去掉本地存储中存储的登录状态
      localStorage.removeItem("userInfo");
      this.$router.push({ name: "home" });
    },
   getMovieDetail(){
      this.$router.push({ name: "myMovie" });
   },
   getStoreDetail(){
     this.$router.push({ name: "myStore" });
   }
  }
};
</script>

<style lang="scss" >
.app-cinema {
  flex: 1 1;
  overflow: hidden;
  background: #f3f3f3;
  .my-center {
    min-height: 100%;
    display: -webkit-box;
    display: flex;
    flex-direction: column;
    .header {
      background-color: #f03d37;
      background-image: url(http://s0.meituan.net/bs/file/?f=my-canary:deploy/dpmmweb/client/dpmmweb/component/mycenter/img/bg.png);
      background-repeat: no-repeat;
      background-position: 50%;
      background-size: 100% 4rem;
      height: 4rem;
      overflow: hidden;
      text-align: center;
      img {
        display: inline-block;
        margin-top: 0.7rem;
        width: 1.8rem;
        height: 1.8rem;
        border-radius: 1.6rem;
        border: 0.08rem solid #fff;
      }
      .name {
        margin-top: 0.186667rem;
        font-size: 0.426667rem;
        line-height: 0.6rem;
        color: #fff;
      }
    }
    .container {
      -webkit-box-flex: 1;
      flex: 1;
    }
    // .mb-outline-tb {
    //   background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFW…I/PqBKdxIAAAAYSURBVHjaYnz48OF/BiBg/P8fTDMABBgATToGolgmNfoAAAAASUVORK5CYII=)
    //       0 top repeat-x,
    //     url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFW…I/PoL90/MAAAAZSURBVHjaYvr//z8DCLM8evToPwMQAAQYAGuLCaa37ZaAAAAAAElFTkSuQmCC)
    //       0 bottom repeat-x;
    // }
    .group {
      margin-top: 0.266667rem;
      background: #fff;

      .orders {
        padding: 0 0.4rem;
        position: relative;
        overflow: hidden;
        text-align: center;
      }
      .title {
        position: relative;
        margin: 0.346667rem 0 0;
        font-size: 0.4rem;
        line-height: 0.56rem;
        height: 0.56rem;
        color: #333;
        z-index: 9;
        display: inline-block;
        width: 2.133333rem;
        background-color: #fff;
      }
      .title-line {
        position: absolute;
        top: 0.613333rem;
        left: 50%;
        margin-left: -2.133333rem;
        width: 4.309333rem;
        height: 0.013333rem;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzhCNEEzQTE0NzNBMTFFNkEyMkFFN0M2MDc0NjIyN0YiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzhCNEEzQTA0NzNBMTFFNkEyMkFFN0M2MDc0NjIyN0YiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2Mzg3REIwMzQ3MzcxMUU2QTIyQUU3QzYwNzQ2MjI3RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2Mzg3REIwNDQ3MzcxMUU2QTIyQUU3QzYwNzQ2MjI3RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoL90/MAAAAZSURBVHjaYvr//z8DCLM8evToPwMQAAQYAGuLCaa37ZaAAAAAAElFTkSuQmCC)
          0 bottom repeat-x;
        background-size: 1px 1px;
      }
      .mb-line-b {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjYGA4AAAAxADBPcXUKgAAAABJRU5ErkJggg==)
          0 bottom repeat-x;
      }
      .list {
        overflow: hidden;
        &.list-two .order-item {
          width: 50%;
        }
        .order-item {
          width: 25%;
          float: left;
          height: 2.586667rem;
          background-repeat: no-repeat;
          background-position: top;
          background-size: 1.12rem auto;
          margin-top: 0.48rem;
          &.movie {
            background-image: url(http://s0.meituan.net/bs/file/?f=my-canary:deploy/dpmmweb/client/dpmmweb/component/mycenter/img/movie.png);
          }
          &.store {
            background-image: url(http://s0.meituan.net/bs/file/?f=my-canary:deploy/dpmmweb/client/dpmmweb/component/mycenter/img/store.png);
          }
          a {
            display: block;
            height: 2.4rem;
            p {
              position: relative;
              top: 1.413333rem;
              text-align: center;
              font-size: 0.4rem;
              line-height: 0.56rem;
              height: 0.56rem;
              margin: 0;
              color: #333;
            }
          }
        }
      }
      .item {
        position: relative;
        height: 1.173333rem;
        line-height: 1.173333rem;
        font-size: 0.4rem;
        &:after {
          position: absolute;
          right: 0.4rem;
          top: 0.48rem;
          display: inline-block;
          content: "";
          width: 0.213333rem;
          height: 0.213333rem;
          border-left: 1px solid #ccc;
          border-top: 1px solid #ccc;
          -webkit-transform: rotate(135deg);
          transform: rotate(135deg);
        }
        a {
          display: block;
          color: #333;
          padding: 0 0.4rem;
          span {
            text-align: left;
          }
        }
      }
    }
  }
  .exit {
    display: block;
    width: 100%;
    margin-top: 0.4rem;
    height: 0.85rem;
    line-height: 0.85rem;
    background: #e54847;
    color: #ffffff;
    border: none;
    font-size: 0.4rem;
  }
}
</style>

