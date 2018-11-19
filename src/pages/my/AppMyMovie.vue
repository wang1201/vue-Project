<template>
    <div class="order-content">
        <div class="order-list" v-if="info" v-for="item in info" :key="item.index">
            <div class="order-item good mb-line-tb" v-if="item.useStatus && item.useStatus==2">
                <div class="order-title mb-line-b">
                    <div class="cinema-name line-ellipsis">{{item.title}}</div>
                </div>
                <a>
                    <div class="order-info">
                        <img :src="item.pic" alt="">
                        <div class="order-desc">
                            <div class="movie-name line-ellipsis">{{item.info2}}</div>
                            <div class="showTime line-ellipsis">{{item.info3}}</div>
                        </div>
                    </div>
                </a>
                <div class="order-more mb-line-t">
                    <div class="price">{{item.bottom}}</div>
                </div>
            </div>
            <div class="order-item mb-line-tb" v-if="item.ui && item.ui.cate == 300">
                <div class="order-title mb-line-b">
                    <a class="cinema-name line-ellipsis">
                        {{item.cinema.name}}
                    </a>
                </div>
                <a class="order-detail-link">
                    <div class="order-info">
                        <img :src="item.movie.img | changeImg('114.160')" alt="">
                        <div class="order-desc">
                            <div class="movie-name line-ellipsis">{{item.movie.name}}&nbsp;&nbsp;<span>2张</span></div>
                            <div class="showTime line-ellipsis">{{item.show.showTime}}</div>
                            <div class="position line-ellipsis">{{item.seats.hallName}}
                                <span v-for="seat in item.seats.list" :key="seat.index">
                                    {{seat.rowId}}排{{seat.columnId}}座</span> &nbsp;
                            </div>
                        </div>

                    </div>
                </a>
                <div class="order-more  mb-line-t">
                    <div class="price">总价：<span>{{item.order.sellMoney}}元</span></div>
                    <div class="status">{{item.otherStatus}}</div>
                </div>
            </div>

        </div>

    </div>

</template>

<script>
export default {
    data(){
        return{
            info:[],
        }
    },
  async created() {
    let userInfo = localStorage.userInfo
      ? JSON.parse(localStorage.userInfo)
      : "";
    let results = await this.$http({
      url: "/my/ajax/myOrderList?token=" + userInfo.token
    });
    this.info = results.orderlist;
    console.log(results);
  }
};
</script>
<style lang="scss">
.order-content {
  overflow: hidden;
  background: #f4f4f4;
  height: 100%;
  .line-ellipsis {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
  a {
    text-decoration: none;
    cursor: pointer;
  }
  .mb-line-t {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjOMDAAAACRADBQq93fQAAAABJRU5ErkJggg==)
      0 top repeat-x;
    background-size: .013333rem .013333rem;
  }
  .mb-line-b {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACAQMAAABIeJ9nAAAABlBMVEUAAADh4eGdLxMbAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjOMDAAAACRADBQq93fQAAAABJRU5ErkJggg==) 0 bottom repeat-x;
        background-size: .013333rem  .013333rem ;
}
  .order-list {
    .order-item {
      background-color: #fff;
      margin-bottom: .266667rem;
      .order-title {
        display: -webkit-box;
        display: flex;
        padding: 0 .4rem;
        .cinema-name {
          display: inline-block;
          text-align: left;
          -webkit-box-flex: 1;
          flex: 1 1 auto;
          line-height: 1.013333rem;
          height:1.013333rem;
          font-size: .346667rem;
          color: #666;
          margin-right: .16rem;
        }
      }
      .order-more {
       padding: 0 .4rem 0 0.4rem;
        .price,
        .status {
          line-height: 1.12rem;
          height:  1.12rem;
          font-size: .346667rem;
          color: #888;
          display: inline-block;
        }
      }
    }
    .order-info {
      margin: .32rem .4rem;
      overflow: hidden;
      position: relative;
      display: -webkit-box;
      display: flex;
      img {
        -webkit-box-flex: 0;
        flex: 0 0 auto;
        width: 1.6rem;
        height: 2.133333rem;
      }
      .order-desc {
        -webkit-box-flex: 1;
        flex: 1 1 auto;
        margin-left: .32rem;
        margin-top: .106667rem;
        overflow: hidden;
        .movie-name {
          font-size: .4rem;
          color: #000;
          line-height: .56rem;
          height: .56rem;
        }
        .position,
        .showTime {
          font-size: .32rem;
          color: #888;
          line-height:.48rem;
          height: .48rem;
        }
        .showTime {
          margin-top: .133333rem;
        }
      }
    }
  }
}
</style>
