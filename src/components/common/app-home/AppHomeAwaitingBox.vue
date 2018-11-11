<template>
 <div class="awaite-box">
	  <p class="awaite-box_title">近期最受期待</p>
    <div class="awaite-box_info"  ref="tabWrapper" id="awaite-box_info">
        <div class="await-expected_list">
           <app-home-awaiting-item
             v-for="item in itemList"
             :key="item.id"
             :info = "item"
           >
           </app-home-awaiting-item>
            
        </div>
    </div>
    <div class="halving-line"></div>
 </div>
  
  </template>
  <script>
import AppHomeAwaitingItem from "@com/common/app-home/AppHomeAwaitingItem";
import { scroll } from "@util/scrolls";

export default {
  data() {
    return {
      itemList: []
    };
  },
  async created() {
    let results = await this.$http({
      url: "/my/ajax/mostExpected"
    });
    this.itemList = results.coming;
    // this.$nextTick(() => {
    //   this.InittabWrapperScroll();
    // });

    // 横向scroll
    scroll({
      el: '#awaite-box_info',
      data: this.itemList,
      horizontal: true,
      paging: results.paging,
      url: '/my/ajax/mostExpected',
      vm: this
    })
  },
  components: {
    AppHomeAwaitingItem
  },
  methods: {
    // InittabWrapperScroll() {
    //   this.$nextTick(() => {
    //     if (!this.scroll) {
    //       this.scroll = new BScroll(this.$refs.tabWrapper, {
    //         startX: 0,
    //         click: true,
    //         scrollX: true,
    //         scrollY: false,
    //         eventPassthrough: "vertical"
    //       });
    //     } else {
    //       this.scroll.refresh();
    //     }
    //   });
    // }
  }
};
</script>
  <style lang="scss" >
.awaite-box {
  background-color: #fff;  
  overflow: hidden;
  height: 5.733333rem;
  .awaite-box_title {
    padding: 0.4rem 0 0 0.4rem;
    margin: 0 0 0.3rem;
    font-size: 0.373333rem;
    color: #333;
    height:.893333rem ;
  }
  .awaite-box_info {
    width: 9.2rem;
    height: 4.28rem;
    overflow: hidden;
    padding: 0 0.4rem;
    margin: auto;
    .await-expected_list {
      display: inline-block;
      width: initial;
      white-space: nowrap;
    }
    .await-expected_item {
      display: inline-block;
      width: 2.266667rem;
      overflow: hidden;
      margin-right: 0.266667rem;
      .expected-default_img {
        width: 2.266667rem;
        height: 3.066667rem;
        position: relative;
        margin-bottom: 0.16rem;
        .poster-img {
          height: 100%;
        }
        .poster-wish_bg {
          display: inline-block;
          width: 100%;
          height: 0.933333rem;
          position: absolute;
          left: 0;
          bottom: 0;
          background-image: -webkit-linear-gradient(
            top,
            rgba(77, 77, 77, 0),
            #000
          );
          background-image: linear-gradient(-180deg, rgba(77, 77, 77, 0), #000);
        }
        .wish {
          position: absolute;
          left: 0rem;
          bottom: 0rem;
          height: 0.426667rem;
          text-align: center;
          color: #faaf00;
          font-size: 0.32rem;
          font-weight: 600;
        }
        .toggle-wish {
          width: 0.746667rem;
          line-height: 0.746667rem;
          height: 0.746667rem;
          background: rgba(61, 63, 71, 0.6);
          text-align: center;
          border-bottom-right-radius: 0.266667rem;
          position: absolute;
          top: 0;
          left: 0;
          span {
            display: inline-block;
            width: 0.266667rem;
            height: 0.266667rem;
            background-size: 100%;
            background-repeat: no-repeat;
            background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAoCAYAAACFFRgXAAAABGdBTUEAALGPC/xhBQAAAytJREFUWAnVmLtrFFEUh3cWFAtRE5FEEUREsFAkooUIgl3+CUEU7LVR1LBIMERCLFLZRG1CrFJYpLBQENRGC4n4wBeKRUQ2PlAQX+v3m70z7MzemZ3HZp05cPbce86553w7O7Mzc51KjDQaDYfwDvSAseux69Cv6Ef0LXoHXXAc5y82UqhVJbgLPYhuQTega9DPaB19ht6VpVYDaxUBWYUGewkcQzdbE4LOJabXaHQ76G7OqHWI0RG0v+mJ/XxPdJpaD2xZbcAUX0XiSXS/bUEH3yPil2imL1Chln6RE+huzVPKffJV60frugAwDfoI1tBtrUkpx4vknzVrLmAHU65vTX/F5DzQnzynDwzsCpwX0e1eMIfV+S3ReZpXXlDgFNC/VEgXgifHGXQDVvUE2g1Y1RKT2FxxgTm6cg4bXxHNsGH0j/DhIlKGmFzGKuSbCAyFgkWcDsG6UaeE/m/LIvsEvKcstGIV8ECJgAcErJtFWaRPwCvLQitWAbv3/ZJALwlYj3ZlkbqA9YBRFnkp4HtloRWrgJ+g/uNbgeHF+LTKY5tebWYLDOqhzYpVR1hyE33njor5ITYxNp/WIP/DeBINvI4ooQAipknD6D9eVnC8JjCOxr799vgLiGXcsLmtvVPCnRB4yGDanRTjQ2/PYvIlACwvCTcwM37G/xvMGJYAQRuwoiRex8wFMns7mTMMbV2twMpiwVXMfNuK5XfMm97WTpHAJvsy9pZ15fI41Us9IyUWmG+qPa4ptBe3b/WYMj2zAWsVBfQfPYEGrlbFuiiqPWF6xZaNPcLeSgr9ZjyGLni+LlrVHDM9OpZNBKwqFPyJGUWfa94lUa1RUztRSX9vLVE2SewNrMboaG9NuiYi7w3+M8B+i4hb3amBVQXotRjdxpPsHWtJWLQHfBrYL+FAp3kmYBUFWnu/2u1Mu03wgTXajaxjU0tmYHUCehAj6H7NE4ggBSvoTJL4orNVp/Eifm1eJ/lplXMuD6wYcgGrAAA6H0fQ75pHiGIjJjciJZk7N7DaAKIrvobarnj5aiaHYT7JdQ6HW5sL8Sj+nSb2GHsF2EwXWLi+5v8ArR6xIZ+h44wAAAAASUVORK5CYII=);
          }
        }
      }
      .await-expected_name {
        margin: 0 0 0.08rem;
        font-size: 0.346667rem;
        color: #222;
        font-weight: 700;
        height: .466667rem;
      }
      .await-expected_date {
        margin: 0;
        font-size: 0.32rem;
        color: #999;
        height: .413333rem;
      }
    }
  }
  .halving-line{
    height: 0.266667rem;
    background: #F5F5F5;
  }
}
</style>
